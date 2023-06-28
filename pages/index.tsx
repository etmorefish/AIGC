// import ThemeSwitch from "@/components/ThemeSwitch";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  
  return (
    <div className="text-center text-gray-800 dark:text-gray-100 font-bold">
      Home 
      <div>
        <Link href={'/chat'}>Chat</Link>
      </div>

    {/* <ThemeSwitch /> */}

    </div>


  )
}
