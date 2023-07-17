import Link from "next/link";
import { Button } from "antd";
import Head from "next/head";
import RootLayout from "@/components/layout/rootLayout";
import Image from "next/image";

export default function Home() {
  return (
    <RootLayout
      meta={{
        title: "AIGC",
        description: "A free platform by Eatmorefishs.",
      }}
    >
      <main className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Link href="/chat">
              <div className="flex  bg-[#059669] rounded-3xl">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition sm:p-4">
                  <div className="justify-between flex">
                    <div className="flex">
                      <span className="text-[24px] text-white mr-3">Chat</span>
                      <Image
                        src="/search.svg" alt="AIGC Chat"
                        width="15"
                        height="15"
                      >
                      </Image>
                    </div>
                    <Image
                      src="/r.svg" alt="AIGC Chat"
                      width="7"
                      height="14"
                    >
                    </Image>
                  </div>
                  <div className="">
                    <div className="one justify-items-end grid">
                      <Image
                        src="/me.svg" alt="me"
                        width="44"
                        height="44"
                      >
                      </Image>
                      <div className="text w-[298px] h-[42px] my-2.5 bg-[#FFFFFF]/75 rounded-[8px]" ></div>
                    </div>
                    <div className="two">
                    <Image
                      src="/c.svg" alt="c"
                      width="44"
                      height="44"
                    >
                    </Image>
                    <div className="text max-w-[298px] h-[42px] my-2.5 bg-[#FFFFFF]/75 rounded-[8px] mb-[50px]" ></div>
                    </div>
                  </div>
                </article>
              </div>
            </Link>

            <Link href="/hot">
              <div className="flex  bg-[#F2B32D] rounded-3xl" >
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition  sm:p-4">
                  <div className="justify-between flex">
                    <div className="flex">
                      <span className="text-[24px] text-white mr-3">热搜榜</span>
                      <Image
                        src="/search.svg" alt="AIGC hot"
                        width="15"
                        height="15"
                      >
                      </Image>
                    </div>
                    <Image
                      src="/r.svg" alt="AIGC hot"
                      width="7"
                      height="14"
                    >
                    </Image>
                  </div>
                  <div className="list">
                    <div className=""></div>
                  </div>
                </article>
              </div>
            </Link>

          </div>
        </div>
      </main>
    </RootLayout>
  );
}
