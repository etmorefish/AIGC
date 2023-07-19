import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatMessage, Stream } from "@/utils/stream";

export const config = {
  runtime: "edge",
}

interface Body {
  messages: ChatMessage[];
}

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const body: Body = await req.json();


  const payload = {
    model: process.env.MODEL || "gpt-3.5-turbo",
    messages: body.messages,
    stream: true,
  };

  const stream = await Stream(payload);
  return new Response(stream);
}
