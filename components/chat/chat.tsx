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
    <div className="flex-1 p-2  overflow-y-auto">
      {/* Chat .......................................................... */}
      {conversations && conversations.length > 1
        ? conversations
            // .filter((item: Conversation) => item.role !== ROLES.SYSTEM)
            .map((item: Conversation, index: number) => {
              return (
                <div key={index} className="px-4 py-5">
                  {item.role}: {item.content}
                </div>
              );
            })
        : ""}
    </div>
  );
};
