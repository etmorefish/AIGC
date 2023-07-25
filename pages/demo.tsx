import React, { useEffect, useState } from "react";
import Image from "next/image";

export const getStaticProps = async () => {
  const messages = [
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },
    {
      id: 2,
      user: "Mary",
      text: "Hello John, how are you today?",
    },
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },
    {
      id: 2,
      user: "Mary",
      text: "Hello John, how are you today?",
    },
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },
    {
      id: 2,
      user: "Mary",
      text: "Hello John, how are you today?",
    },
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },
    {
      id: 2,
      user: "Mary",
      text: "Hello John, how are you today?",
    },
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },
    {
      id: 2,
      user: "Mary",
      text: "Hello John, how are you today?",
    },
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },
    {
      id: 2,
      user: "Mary",
      text: "Hello John, how are you today?",
    },
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },
    {
      id: 2,
      user: "Mary",
      text: "Hello John, how are you today?",
    },
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },
    {
      id: 2,
      user: "Mary",
      text: "Hello John, how are you today?",
    },
    {
      id: 1,
      user: "John",
      text: "Hi there!",
    },

    // more messages
  ];

  const channels = [
    {
      name: "General",
      id: 1,
    },
    {
      name: "Tech Talk",
      id: 2,
    },
    {
      name: "General",
      id: 1,
    },
    {
      name: "Tech Talk",
      id: 2,
    },

    // more channels
  ];

  return {
    props: {
      messages,
      channels,
    },
  };
};

const about = ({ messages, channels }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarTransition, setSidebarTransition] = useState(false);

  // const handleSidebarClick = () => {
  //   // 点击侧边栏时不触发收缩，避免侧边栏自身的点击事件造成影响
  //   if (sidebarCollapsed) {
  //     setSidebarCollapsed(false);
  //   } else {
  //     setSidebarCollapsed(true);
  //   }
  //   console.log("sidebarCollapsed: ", sidebarCollapsed);
  // };
  const handleSidebarClick = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  useEffect(() => {
    // 使用定时器来延迟设置 sidebarTransition 状态，确保过渡效果生效
    const timer = setTimeout(() => {
      setSidebarTransition(sidebarCollapsed);
    }, 100);

    return () => clearTimeout(timer);
  }, [sidebarCollapsed]);

  return (
    <div className="flex flex-col h-screen">
      {/* <!-- header --> */}
      <header className="bg-indigo-500 text-white p-4">Header</header>

      <div className="flex overflow-hidden">
        {/* <!-- sidebar --> */}
        <div
          className={`${
            sidebarCollapsed
              ? "hidden transition-all duration-1000 ease-in"
              : "flex transition-all duration-1000 ease-out"
          } flex-col `}
        >
          <div className="flex justify-between ">
            <div className="flex-1 p-2 m-2 border border-black rounded-md">
              + new one
            </div>
            <p className="p-2 m-2 pt-3 border border-md border-black hover:bg-slate-100" onClick={handleSidebarClick}>
              <Image
                src="/sidebar.svg"
                alt="close sidebar"
                width="16"
                height="16"
              ></Image>
            </p>
          </div>
          <div className="flex-1 bg-gray-500 p-2 w-80 overflow-y-scroll">
            <ul>
              {channels.map((c) => (
                <li
                  key={c.id}
                  className="p-2 rounded text-green-500 mt-9 pt-7 hover:bg-gray-200"
                >
                  {c.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-300">userinfo</div>
        </div>
        {/* <!-- main content --> */}
        <div className="flex flex-1 flex-col bg-sky-300">
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

          {/* <!-- chat content --> */}
          <div className="flex-1 p-10 overflow-y-auto">
            {/* <!-- 聊天记录 --> */}
            {messages.map((m) => (
              <div key={m.id} className="p-2">
                <b>{m.user}</b> {m.text}
              </div>
            ))}
          </div>

          {/* <!-- input --> */}
          <div className="flex p-2">
            <textarea className="flex-1 mr-2 border border-red-600 resize-none" />
            <button>Send</button>
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <footer className="bg-indigo-500 text-white p-4">Footer</footer>
    </div>
  );
};

export default about;
