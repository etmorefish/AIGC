import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from '../themeSwitch';

export default function Nav() {
    return (
        <>
            <header className="flex  justify-between bg-sky-600 dark:bg-yellow-500">
                <Link href="/" className=" flex m-4 items-center font-display text-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    <Image
                        src="/next.svg"
                        alt="AIGC logo"
                        width="30"
                        height="30"
                        className="mr-2 rounded-sm"
                    ></Image>
                    <p>AIGC</p>
                </Link>
                <div>
                    <ThemeSwitch />
                    <button
                        className=" m-4 rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                        onClick={() => {
                            console.log('sign')
                          }}
                    >
                        Sign In
                    </button>
                </div>
            </header>
        </>
    );
}