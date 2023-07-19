import { Conversation, ROLES } from "@/pages/chat";
import React, { useEffect, useRef } from 'react'


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
        <div
            className="w-full max-w-5xl text-left font-sans leading-tight   h-[700px] overflow-y-auto snap-y">
            Chat ..........................................................
            {conversations && conversations.length > 1
                ? conversations
                    // .filter((item: Conversation) => item.role !== ROLES.SYSTEM)
                    .map((item: Conversation, index: number) => {
                        return (
                        <div 
                        key={index}
                        className="w-full px-4 py-5 snap-end"
                        > 
                        {item.role}:  {item.content}
                        </div>
                        );
                    })
                : ""
            }
        </div>
    )
}
