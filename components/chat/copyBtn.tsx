import React, { useState } from "react";
import Copy from "/public/copy.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Message from "./message";
import Image from "next/image";


interface Props {
  text: string;
  dark: boolean;
}
export default function CopyBtn({ text, dark }: Props) {
  const [copy, setCopy] = useState(false);

  function handleCopy() {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }

  return (
    <>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        {/* <Copy width={18} height={18} stroke={dark ? "#ddd" : "#222"} /> */}
        <Image src={"/copy.svg"} alt={""} width={18} height={18} className={dark ? "#ddd" : "#222"}></Image>
      </CopyToClipboard>
      {copy && <Message message="Copied!" />}
    </>
  );
}
