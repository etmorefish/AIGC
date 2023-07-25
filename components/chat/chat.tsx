import { Conversation, ROLES } from "@/pages/chat";
import React, { useEffect, useRef } from "react";

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
      {/* Chat .......................................................... */}
      {conversations && conversations.length > 1
        ? conversations
            // .filter((item: Conversation) => item.role !== ROLES.SYSTEM)
            .map((item: Conversation, index: number) => {
              return (
                <div key={index} className={`rounded-xl  m-2 p-2 border border-sky-300 ${
                  item.role === ROLES.USER
                    ? `text-right text-green-400`
                    : 'text-left text-black'
                }`}>
                  {item.role}: {item.content}
                </div>
              );
            })
        : ""}
    </div>
  );
};
