import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    return (
        <>
            <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                <Link href="/" className="flex items-center font-display text-2xl">
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
                    
                    <button
                        className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                    >
                        Sign In
                    </button>

                </div>
            </div>
        </>
    );
}