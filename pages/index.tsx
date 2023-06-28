import Link from "next/link";
import { Button } from "antd";
import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>AIGC</title>
        <meta name="description" content="A free platform by Eatmorefishs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center text-gray-800 dark:text-gray-100 font-bold ">
        Home
        <div>
          <Link href={'/chat'}>Chat</Link>
        </div>

        <Button type="primary" className="dark: bg-sky-600"> Button</Button>
      </div>
    </>


  )
}
