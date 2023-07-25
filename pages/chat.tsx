import Input from "@/components/chat/Input";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import RootLayout from "@/components/layout/rootLayout";
import { Chat } from "@/components/chat/chat";
import { type } from "os";
import Sidebar from "@/components/chat/sidebar";
import { SiderContext } from "antd/es/layout/Sider";
import { sideContext } from "@/context/sideContext";
import Image from "next/image";


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

  // 控制侧边栏隐藏
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const handleSidebarClick = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

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
          <div className="flex flex-1  dark:text-gray-100 font-bold h-full">
            {/* <!-- sidebar --> */}
            <sideContext.Provider value={{sidebarCollapsed, setSidebarCollapsed, handleSidebarClick}}>
     <Sidebar />
            </sideContext.Provider>
       
            {/* <!-- main content --> */}
            <div className="flex flex-1 flex-col">
              {/* <!-- chat content --> */}
              <p  className={`${
              sidebarCollapsed ? "" : "hidden"
            } absolute p-2 m-2 pt-3 border border-md border-black hover:bg-slate-100`}
            onClick={handleSidebarClick}>
              <Image
                src="/sidebar.svg"
                alt="close sidebar"
                width="16"
                height="16"
              ></Image>
            </p>

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
