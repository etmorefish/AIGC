import Link from "next/link";
import RootLayout from "@/components/layout/rootLayout";
import Image from "next/image";
import Weibo from "@/components/hot/weibo";
import Chat from "@/components/index/chat";
import Hot from "@/components/index/hot";

export default function Home() {
  return (
    <RootLayout
      meta={{
        title: "AIGC",
        description: "A free platform by Eatmorefishs.",
      }}
    >
      <main>
        <div className="index__cards-wrapper">
          <Chat />
          <Hot />
        </div>
      </main>

    </RootLayout>
  );
}
