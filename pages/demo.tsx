import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { monoBlue } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import remarkGfm from "remark-gfm";

export const getStaticProps = async () => {
  const messages = [
    {
      id: 1,
      user: "John",
      text: "~~~javascript fetch('https://api.example.com/post', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: 'value' }) }) .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.log(error)); ~~~ In the above examples, we use the fetch function to send requests. We chain methods like `then` to handle the response asynchronously. The `fetch` function returns a Promise that resolves to the response object, which we can then use to extract the data. ",
    },
    {
      id: 2,
      user: "Mary",
      text: "The Fetch API is a modern JavaScript interface that allows you to make asynchronous HTTP requests. Here's a basic example of how to use it: 1. Making a GET request: ```javascript fetch('https://api.example.com/data') .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.log(error)); ``` 2. Making a POST request: ```javascript fetch('https://api.example.com/post', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ key: 'value' }) }) .then(response => response.json()) .then(data => console.log(data)) .catch(error => console.log(error)); ``` In the above examples, we use the fetch function to send requests. We chain methods like `then` to handle the response asynchronously. The `fetch` function returns a Promise that resolves to the response object, which we can then use to extract the data. I hope this helps! Let me know if you have any further questions.",
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

  const markdown = `Here is some JavaScript code:

      ~~~js
      console.log('It works!')
      ~~~
      `;

  return (
    <div className="flex flex-col h-screen">
      {/* <!-- header --> */}
      <header className="bg-indigo-500 text-white p-4">Header</header>

      <div className="flex flex-1 overflow-hidden">
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
            <p
              className="p-2 m-2 pt-3 border border-md border-black hover:bg-slate-100"
              onClick={handleSidebarClick}
            >
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
        <div className="flex flex-1 flex-col bg-sky-50">
          <p
            className={`${
              sidebarCollapsed ? "" : "hidden"
            } absolute p-2 m-2 pt-3 border border-md border-black hover:bg-slate-100`}
            onClick={handleSidebarClick}
          >
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
              <div key={m.id} className="p-2 m-2 border rounded border-sky-300">
                <b>{m.user}</b> <br />
                {/* {m.text} */}
                <div>
                  <ReactMarkdown
                      className="ml-2 flex-grow overflow-x-auto overflow-y-hidden whitespace-pre-wrap "
                      linkTarget="_blank"
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || "");
                          console.log("match: ", match);
                          console.log("children: ", children);
                          return !inline ? (
                            <div className="relative">
                              <SyntaxHighlighter
                                style={monoBlue}
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
                      {m.text.replace(/^\s+/, "").replace(/\n\n/g, "\n")}
                    </ReactMarkdown>

                  <ReactMarkdown
                    children={m.text}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\n$/, "")}
                            style={monoBlue}
                            language={match[1]}
                            PreTag="div"
                          />
                        ) : (
                          <code {...props} className={className}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                  
                </div>
                
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
