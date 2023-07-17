import React from "react";
import Link from "next/link";
import Image from "next/image";

const Chat = () => {
  return (
    <>
      <Link href="/chat">
        <div className="flex  h-96 bg-[#059669] rounded-3xl">
          <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition sm:p-4">
            <div className="justify-between flex">
              <div className="flex">
                <span className="text-[24px] text-white mr-3">Chat</span>
                <Image
                  src="/chat.svg"
                  alt="AIGC Chat"
                  width="15"
                  height="15"
                ></Image>
              </div>
              <Image src="/r.svg" alt="AIGC Chat" width="7" height="14"></Image>
            </div>
            <div className="">
              <div className="one justify-items-end grid">
                <Image src="/me.svg" alt="me" width="44" height="44"></Image>
                <div className="text w-3/4 h-[42px] my-2.5 bg-[#FFFFFF]/75 rounded-[8px]"></div>
              </div>
              <div className="two justify-items-start grid">
                <Image src="/c.svg" alt="c" width="44" height="44"></Image>
                <div className="text w-3/4 h-[42px] my-2.5 bg-[#FFFFFF]/75 rounded-[8px]"></div>
              </div>
            </div>
          </article>
        </div>
      </Link>
    </>
  );
};

export default Chat;
