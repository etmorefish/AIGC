import React from "react";
import Link from "next/link";
import Image from "next/image";
const Hot = () => {
  return (
    <>
      <Link href="/hot">
        <div className="flex  bg-[#F2B32D] h-96 rounded-3xl">
          <article className="relative flex flex-col w-full p-6 transition rounded-3xl ring-1 ring-neutral-950/5 sm:p-4">
            <div className="flex justify-between">
              <div className="flex">
                <span className="text-[24px] text-white mr-3">热搜榜</span>
                <Image
                  src="/search.svg"
                  alt="AIGC hot"
                  width="15"
                  height="15"
                ></Image>
              </div>
              <Image src="/r.svg" alt="AIGC hot" width="7" height="14"></Image>
            </div>
            <div className="list">
              <div className=""></div>
            </div>
          </article>
        </div>
      </Link>
    </>
  );
};

export default Hot;
