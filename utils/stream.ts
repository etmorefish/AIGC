import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

import * as Sentry from "@sentry/nextjs";

export type ChatGPTAgent = "user" | "system" | "assistant";

export interface ChatMessage {
  role: ChatGPTAgent;
  content: string;
}

export interface OpenAIStreamPayload {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  top_p?: number;
  frequency_penalty?: number;
  presence_penalty?: number;
  max_tokens?: number;
  stream?: boolean;
  n?: number;
}

export async function Stream(payload: OpenAIStreamPayload) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let counter = 0;

  // const res = await fetch("https://api.openai.com/v1/chat/completions", {
  const res = await fetch("https://openai.maolei.space/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;
          if (data === "[DONE]") {
            controller.close();
            return;
          }
          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta?.content || "";
            if (counter < 2 && (text.match(/\n/) || []).length) {
              // this is a prefix character (i.e., "\n\n"), do nothing
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            // maybe parse error
            controller.error(e);
          }
        }
      }

      // stream response (SSE) from OpenAI may be fragmented into multiple chunks
      // this ensures we properly read chunks and invoke an event for each SSE event stream
      const parser = createParser(onParse);
      // https://web.dev/streams/#asynchronous-iteration
      for await (const chunk of res.body as any) {
        const data = decoder.decode(chunk);

        try {
          const parsed = JSON.parse(data);
          if (parsed?.error) {
            const msg = `ERROR _MESSAGE: ${parsed.error?.message}`;
            controller.enqueue(encoder.encode(msg));
            controller.close();
            Sentry.captureException(msg);
          }
        } catch (error) { }

        parser.feed(data);
      }
    },
  });

  return stream;
}
