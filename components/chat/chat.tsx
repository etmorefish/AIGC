import { Conversation, ROLES } from "@/pages/chat";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { monoBlue } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import remarkGfm from "remark-gfm";
import CopyBtn from "./copyBtn";
import { FormatDate } from "@/utils/utils";
interface Props {
  conversations: Conversation[];
  saving: boolean;
}

export const Chat = (props: Props) => {
  const { conversations, saving } = props;
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [dark, setDark] = useState(false);
  // const showCopyMap = useRef(new Map()).current;
  const [showCopy, setShowCopy] = useState(false);

  useEffect(() => {
    if (bottomRef.current && conversations.length > 2) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [conversations]);

  return (
    <div className="flex-1 px-10 pt-10 overflow-y-auto" id="save-as-image">
      {/* 显示消息 */}
      {conversations.map((item, index) => {
        const onMouseEnter = () => setShowCopy(true);
        const onMouseLeave = () => setShowCopy(false);

        // 用户消息
        if (item.role === ROLES.USER) {
          return (
            <div key={index} className="flex justify-end ">
              <div className="max-w-[75%] mr-4 p-2 rounded bg-gray-100 dark:bg-slate-900">
                <p>{item.content}</p>
                <p className="text-xs text-right text-gray-500">
                  {/* 7/25/2023, 9:46:06 PM */}
                </p>
              </div>
              {/* <img
                className="w-10 h-10  p-2 pr-1 rounded-full bg-[#059669]"
                src="me.svg"
              /> */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#059669]">
                <p className="text-center">me</p>
              </div>

            </div>
          );
        }
        // 机器人消息
        return (
          <div key={index} className="flex justify-start">
            <img
              className="w-10 h-10 rounded-full dark:bg-white"
              src="bot.svg"
            />
            <div className="relative max-w-[75%] ml-4 p-4 rounded bg-gray-100 dark:bg-slate-900"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              {/* <ReactMarkdown >{item.content}</ReactMarkdown> */}
              <ReactMarkdown
                className="flex-grow ml-2 overflow-x-auto overflow-y-hidden whitespace-pre-wrap"
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
                        <div className="absolute right-0 p-1 mr-1 rounded cursor-pointer top-1 bg-slate-50 dark:bg-slate-700">
                          <CopyBtn
                            text={String(children).replace(/\n$/, "")}
                            dark={dark}
                          />
                        </div>
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
              <div className="absolute right-0 mr-1 cursor-pointer top-1">
                {showCopy && (
                  <CopyBtn
                    text={item.content}
                    dark={dark}
                  />
                )}
              </div>
              <p className="ml-2 text-xs text-left text-gray-500">
                {    // 解析字符串为Date对象
                  FormatDate(item.date)
                }
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
