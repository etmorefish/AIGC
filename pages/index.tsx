import Link from "next/link";
import { Button } from "antd";
import Head from "next/head";
import RootLayout from "@/components/layout/rootLayout";

export default function Home() {

  return (
    <RootLayout meta={{
      title: 'AIGC',
      description: 'A free platform by Eatmorefishs.'
    }}>
      <main className="">
        <div className="flex flex-row">
          <div className="basis-1/4">01</div>
          <div className="basis-1/4">02</div>
          <div className="basis-1/2">03</div>
        </div>
      </main>

    </RootLayout>


  )
}
