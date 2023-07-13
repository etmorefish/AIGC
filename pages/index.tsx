import Link from "next/link";
import { Button } from "antd";
import Head from "next/head";
import RootLayout from "@/components/layout/rootLayout";

export default function Home() {
  return (
    <RootLayout
      meta={{
        title: "AIGC",
        description: "A free platform by Eatmorefishs.",
      }}
    >
      <main className="flex flex-row px-8 pt-2 w-full">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-emerald-500 p-4 shadow-md rounded-lg text-white w-96">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Chat</h2>
              <h2 className="text-lg font-bold">{">"}</h2>
              {/* <img src="sun.svg" alt="" className="w-6 h-6" /> */}
            </div>
            <div className="flex flex-col justify-end ">
            <div className="relative">
              <img src="sun.svg" alt="" className="w-6 h-6 absolute inset-y-0 right-0" />
            </div>
              <div className="relative">
                <input disabled type="text" className="w-auto " placeholder="" />
              </div>
              <div>
                {/* <input disabled type="text" placeholder="" /> */}
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">Card 2</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Card 3</div>
          <div className="bg-white p-4 shadow-md rounded-lg">Card 4</div>
        </div>
      </main>
    </RootLayout>
  );
}
