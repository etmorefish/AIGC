import React from "react";

interface Props {
  message: string;
}
export default function Sidebar() {
  return (
    <div className="flex flex-col bg-[#059669] p-2 w-96 ">
      <div className="p-2">new chat</div>
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
