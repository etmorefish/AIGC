import Weibo from "@/components/hot/weibo";
import React from "react";

const hot = () => {
  return (
    <main>
      <div className="hot__cards-wrapper">
        <div className="border rounded-lg border-amber-500 bg-sky-400">
          <div className="flex items-center justify-between p-4 bg-white">
            <div>微博</div>
            <div>热门榜</div>
          </div>
          <div className="px-4">
            <div>
              <span className="items-center justify-center w-4 h-4 mr-2 text-lg bg-red-400 inilne-block rounded-8 ">
                1
              </span>
              <span className="">奔跑吧 原地消失术</span>
            </div>
            <div>
              <span className="items-center justify-center w-4 h-4 mr-2 text-lg bg-red-400 inilne-block rounded-8 ">
                1
              </span>
              <span className="">奔跑吧 原地消失术</span>
            </div>
            <div>
              <span className="items-center justify-center w-4 h-4 mr-2 text-lg bg-red-400 inilne-block rounded-8 ">
                1
              </span>
              <span className="">奔跑吧 原地消失术</span>
            </div>
            <div>
              <span className="items-center justify-center w-4 h-4 mr-2 text-lg bg-red-400 inilne-block rounded-8 ">
                1
              </span>
              <span className="">奔跑吧 原地消失术</span>
            </div>
            <div>
              <span className="items-center justify-center w-4 h-4 mr-2 text-lg bg-red-400 inilne-block rounded-8 ">
                1
              </span>
              <span className="">奔跑吧 原地消失术</span>
            </div>
          </div>
          <div className="p-4">一小时前更新</div>
        </div>
        <Weibo />
        <div className="bg-sky-400"> 01</div>
        <div className="bg-sky-400"> 01</div>
        <div className="bg-sky-400"> 01</div>
        <div className="bg-sky-400"> 01</div>
        <div className="bg-sky-400"> 01</div>
        <div className="bg-sky-400"> 01</div>
      </div>
    </main>
  );
};

export default hot;
