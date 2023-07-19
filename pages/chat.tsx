import Input from "@/components/chat/Input";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import RootLayout from "@/components/layout/rootLayout";
import { Chat } from "@/components/chat/chat";
import { type } from "os";

export type ROUT_TYPE = "user" | "assistant" | "system";
export interface Conversation {
  role: ROUT_TYPE;
  content: string;
}

export enum ROLES {
  USER = "user",
  ASSISTANT = "assistant",
  SYSTEM = "system",
}

const chat = () => {
  const [errMsg, setErrMsg] = useState("");
  const [saving, setSaving] = useState(false);

  const [conversations, setConversations] = useState<Conversation[]>([
    {
      role: ROLES.SYSTEM,
      content: "You are a helpful assistant. Answer in detail.",
    },
  ]);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("westorg")) {
      let item = localStorage.getItem("westorg") as string;
      setConversations(JSON.parse(item));
    }
  }, []);

  console.log("chat conv", conversations);

  return (
    <>
      <Head>
        <title>AIGC - Chat</title>
        <meta name="description" content="A free platform by Eatmorefishs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RootLayout
        meta={{
          title: "AIGC",
          description: "A free platform by Eatmorefishs.",
        }}
      >
        {/* <main className="w-full h-screen"> */}
          <div className="flex flex-1  text-center text-gray-800 dark:text-gray-100 font-bold">
            {/* <!-- sidebar --> */}
            <div className="bg-gray-100 p-2 w-80 overflow-y-scroll">
              <ul>
                <li className="p-2 rounded text-green-500 mt-9 pt-7 hover:bg-gray-200">
                  side 01
                </li>
                <li className="p-2 rounded text-green-500 mt-9 pt-7 hover:bg-gray-200">
                  side 02
                </li>
                <li className="p-2 rounded text-green-500 mt-9 pt-7 hover:bg-gray-200">
                  side 03
                </li>
              </ul>
            </div>
            {/* <!-- main content --> */}
            <div className="flex flex-1 flex-col">
              {/* <!-- chat content --> */}

              <Chat conversations={conversations} saving={saving} />
              {/* <!-- input --> */}

              <Input
                conversations={conversations}
                updateConversations={setConversations}
                updateErrMsg={setErrMsg}
                updateSavingStatus={setSaving}
              />
            </div>
          </div>
        {/* </main> */}
      </RootLayout>
    </>
  );
};

export default chat;
