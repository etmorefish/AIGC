
import React, { useContext } from "react";
import Image from "next/image";
import { sideContext } from "@/context/sideContext";

interface Props {
  message: string;
}
export default function Sidebar() {
  const { sidebarCollapsed, setSidebarCollapsed, handleSidebarClick } = useContext(sideContext);

  return (
    <div className={`${
      sidebarCollapsed
        ? "hidden transition-all duration-1000 ease-in"
        : "flex transition-all duration-1000 ease-out"
    }  flex-col bg-[#059669] p-2 w-96 `}>
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
      <div className="flex-1 overflow-y-scroll text-white">
        <ul>
          <li className="p-4 truncate rounded hover:bg-emerald-300">
            Text Overflow Utilities for controlling text overflow in an element.
          </li>
          <li className="p-4 truncate rounded hover:bg-emerald-300">
            Text Overflow Utilities for controlling text overflow in an element.
          </li>
          <li className="p-4 truncate rounded hover:bg-emerald-300">
            Text Overflow Utilities for controlling text overflow in an element.
          </li>
        </ul>
      </div>

      <div>userinfo</div>
    </div>
  );
}
