import React from "react";

interface Props {
  message: string;
}
// Message 弹窗
export default function Message({ message }: Props) {
  return (
    <div
      className="fixed z-30 p-2 font-bold text-green-500 -translate-x-1/2 rounded top-4 left-1/2 bg-slate-500 dark:bg-slate-800 dark:text-green-300"
    >
      {message}
    </div>
  );
}
