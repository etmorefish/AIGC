import { Conversation, ROLES } from "@/pages/chat";
import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

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
              <p>{item.content}</p>
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
