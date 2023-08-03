import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./themeSwitch";

export default function Nav() {
  return (
    <header className="flex justify-between dark:bg-green-500">
      <Link href="/" className="flex items-center m-4 text-2xl font-display">
        {/* 渐变色 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 */}
        <Image
          src="/logo.png"
          alt="AIGC logo"
          width="90"
          height="30"
          className="mr-2 rounded-sm"
        ></Image>
      </Link>
      <div className="m-4">
        <ThemeSwitch />
        <button
          className="items-center p-1 px-4 ml-2 text-sm text-white transition-all bg-black border border-black rounded-full hover:bg-white hover:text-black"
          onClick={() => {
            console.log("sign");
          }}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}
