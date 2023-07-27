import { Conversation, ROLES } from "@/pages/chat";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { monoBlue } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import remarkGfm from "remark-gfm";
interface Props {
  conversations: Conversation[];
  saving: boolean;
}

export const Chat = (props: Props) => {
  const { conversations, saving } = props;
  const bottomRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current && conversations.length > 2) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [conversations]);

  return (
    <div className="flex-1 px-10 pt-10 overflow-y-auto">
      {/* 显示消息 */}
      {/* 显示消息 */}
      {conversations.map((item, index) => {
        // 用户消息
        if (item.role === ROLES.USER) {
          return (
            <div key={index} className="flex justify-end ">
              <div className="max-w-[75%] mr-4 p-2 rounded bg-gray-100">
                <p>{item.content}</p>
                <p className="text-right text-xs text-gray-500">
                  7/25/2023, 9:46:06 PM
                </p>
              </div>
              <img
                className="w-10 h-10  p-2 pr-1 rounded-full bg-[#059669]"
                src="me.svg"
              />
            </div>
          );
        }
        // 机器人消息
        return (
          <div key={index} className="flex justify-start">
            <img className="w-10 rounded-full" src="bot.svg" />
            <div className="max-w-[75%] ml-4 p-2 rounded bg-gray-300">
              {/* <ReactMarkdown >{item.content}</ReactMarkdown> */}
              <ReactMarkdown
                      className="ml-2 flex-grow overflow-x-auto overflow-y-hidden whitespace-pre-wrap"
                      linkTarget="_blank"
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline ? (
                            <div className="relative">
                              <SyntaxHighlighter
                                //@ts-ignore
                                // style={dark ? atomOneDark : monoBlue}
                                style={atomOneDark}
                                language={match ? match[1] : ""}
                                PreTag="div"
                                showLineNumbers
                                {...props}
                              >
                                {String(children).replace(/\n$/, "")}
                              </SyntaxHighlighter>

           
                            </div>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {item.content.replace(/^\s+/, "").replace(/\n\n/g, "\n")}
                    </ReactMarkdown>
              <p className="text-left text-xs text-gray-500">
                7/25/2023, 9:46:06 PM
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
