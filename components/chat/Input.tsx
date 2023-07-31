import { Conversation, ROLES } from "@/pages/chat";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import download from "downloadjs";
import { useRouter } from "next/router";

interface Props {
  conversations: Conversation[];
  updateConversations: (conversations: Conversation[]) => void;
  updateErrMsg: (msg: string) => void;
  updateSavingStatus: (msg: boolean) => void;
}

const Input = (props: Props) => {
  const {
    conversations,
    updateConversations,
    updateErrMsg,
    updateSavingStatus,
  } = props;
  const [isMoblie, setIsMoblie] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const stop = useRef(false);

  let payload: Conversation[] = [];
  let storeMsg = "";

  // 提交消息
  async function handleSubmit() {
    stop.current = false;
    if (!message.trim()) {
      return;
    }
    updateErrMsg("");
    const currentQuestion = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      role: ROLES.USER,
      content: message.trim(),
    };

    payload = [...conversations, currentQuestion];
    let n = 3;
    fetchData(payload, n);
    setMessage("");
  }

  // 清除对话
  function handleClear() {
    updateConversations([
      {
        id: Date.now(),
        date: new Date().toLocaleString(),
        role: ROLES.SYSTEM,
        content: "You are a helpful assistant. Answer in detail.",
      },
    ]);
  }

  // 停止页面返回消息
  function handleStop() {
    stop.current = true;
    setSubmitLoading(false);
  }

  // 获取数据
  function fetchData(payload: Conversation[], n: number) {
    setSubmitLoading(true);

    let num = n * 2 + 1;
    const body = {
      messages: payload.slice(-num),
    };
    console.log("body: ", body);
    fetch(`${location.origin}/api/chat`, {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error: " + response);
        }
        if (!response.body) {
          throw new Error("There was an error fetching");
        }

        const decoder = new TextDecoder("utf-8");
        const reader = response?.body?.getReader();
        function read() {
          reader
            .read()
            .then(({ done, value }) => {
              if (stop.current) return;

              if (done) {
                setSubmitLoading(false);
                return;
              }
              const content = decoder.decode(value);

              if (content) {
                storeMsg += content;
                const curQuestion: Conversation = {
                  id: Date.now(),
                  date: new Date().toLocaleString(),
                  role: ROLES.ASSISTANT,
                  content: storeMsg.toString(),
                };
                updateConversations([...payload, curQuestion]);
                localStorage.setItem(
                  "westorg",
                  JSON.stringify([...payload, curQuestion])
                );
              }
              read();
            })
            .catch((err) => {
              updateErrMsg(err.toString());
              setSubmitLoading(false);
            });
        }

        read();
      })
      .catch((err) => {
        updateErrMsg(err.toString());
        setSubmitLoading(false);
      });
  }

  function handleKeyDown(event: any) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();

      if (!submitLoading) {
        handleSubmit();
      }
    }
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // 在这里处理发送消息的逻辑
    console.log("发送消息:", message);
    setMessage(""); // 清空消息输入框
  };

  // 导出为图片
  function handleSave() {
    // cause we always have a system message at the first
    if (conversations.length < 2) return;
    setSaving(true);
    updateSavingStatus(true);

    const node = document.getElementById("save-as-image");
    if (node) {
      toPng(node)
        .then(function (dataUrl) {
          setSaving(false);
          updateSavingStatus(false);
          download(dataUrl, "conversations.png");
        })
        .catch(function (error) {
          setSaving(false);
          updateSavingStatus(false);
          updateErrMsg(`Oops, something went wrong: ${error}`);
        });
    }
  }

  return (
    // <>
    <div className="flex relative  p-2  mx-10 my-2 border-solid border-2 border-[#059669] rounded-xl dark:bg-gray-800   ">
      <textarea
        // type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 min-h-[100px] max-h-[200px] p-1 dark:bg-gray-800 overflow-y-hidden border-none outline-none"
        placeholder={
          submitLoading
            ? "Waiting..."
            : `Ask me anything. (cmd/Ctrl + enter to submit)`
        }
        onKeyDown={handleKeyDown}
      />
      {/* <div className="flex-grow"></div> 占据剩余空间 */}
      {/* <button
          onClick={handleSubmit}
          disabled={submitLoading}
          className={`m-3 p-3 text-center h-10  rounded bg-black font-medium text-white hover:bg-slate-700 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-400 ${
            submitLoading ? "animate-pulse" : ""
          }`}
        >
          {submitLoading ? "Waiting" : "Submit"}
        </button> */}
      <div className="flex flex-col-reverse px-2 justify-between">
        <div>
          <Image
            src={"/send.svg"}
            alt={"alt send"}
            width={30}
            height={30}
            onClick={handleSubmit}
            title={"Send message"}
            className=""
          ></Image>
        </div>
        <div>
          <Image
            src={"/save_image.svg"}
            alt={"save_image"}
            width={24}
            height={24}
            onClick={handleSave}
            title={"Save to image"}
            className=""
          ></Image>
        </div>
        <div>
          <Image
            src={"/trash.svg"}
            alt={"alt send"}
            width={24}
            height={24}
            onClick={handleClear}
            title={"Delete chat history"}
          ></Image>
        </div>
      </div>

      {/* <button
          className={`m-3 h-10 w-14 rounded-md border border-black font-medium text-black hover:bg-slate-100 dark:border-slate-500 dark:text-slate-200 dark:hover:bg-slate-700 ${
            submitLoading ? "animate-pulse" : ""
          }`}
          onClick={handleClear}
          disabled={submitLoading}
        >
          Clear
        </button> */}

      {submitLoading ? (
        <button
          className={`fixed left-1/2 bottom-60 z-40 p-2 m-2 -translate-x-1/2 rounded border border-black font-normal text-black bg-red-500 dark:border-white dark:text-white`}
          onClick={handleStop}
        >
          ◼︎ Stop Response
        </button>
      ) : (
        ""
      )}
    </div>
    // </>
  );
};

export default Input;
