import React from "react";

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
  return (
    <div className="flex flex-col h-screen">
      {/* <!-- header --> */}
      <header className="bg-indigo-500 text-white p-4">Header</header>

      <div className="flex flex-1 overflow-hidden pr-5">
        {/* <!-- sidebar --> */}
        <div className="bg-gray-100 p-2 w-80 overflow-y-scroll">
          <ul>
            {channels.map((c) => (
              <li key={c.id} className="p-2 rounded text-green-500 mt-9 pt-7 hover:bg-gray-200">
                {c.name}
              </li>
            ))}
          </ul>
        </div>

        {/* <!-- main content --> */}
        <div className="flex flex-1 flex-col">
          {/* <!-- chat content --> */}
          <div className="flex-1 p-2 overflow-y-auto">
            {/* <!-- 聊天记录 --> */}
            {messages.map((m) => (
              <div key={m.id} className="p-2">
                <b>{m.user}</b> {m.text}
              </div>
            ))}
          </div>

          {/* <!-- input --> */}
          <div className="flex p-2">
            <textarea className="flex-1 mr-2 resize-none" />
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
