import Link from "next/link";
import { Button } from "antd";
import Head from "next/head";
import RootLayout from "@/components/layout/rootLayout";
import Image from "next/image";

export default function Home() {
  return (
    <RootLayout
      meta={{
        title: "AIGC",
        description: "A free platform by Eatmorefishs.",
      }}
    >
      <main className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Link href="/chat">
              <div className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                  <h3>
                    <Image
                      src="/chat.svg" alt="AIGC Chat"
                      width="64"
                      height="64"
                    >
                    </Image>
                  </h3>
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <time className="font-semibold">2023</time>
                    <span className="text-neutral-300" aria-hidden="true">|</span>
                    <span>ChatGPT Chatbot</span>
                  </p>
                  <p className="mt-6 font-display text-xl font-semibold text-neutral-950">
                    Intelligent Conversations
                  </p>
                  <p className="mt-4 text-base text-neutral-600">
                    Engage in natural language conversations with our advanced ChatGPT chatbot. Get personalized responses, suggestions, and even entertainment, all through interactive and human-like interactions.
                  </p>
                </article>
              </div>
            </Link>
            <Link href="/ai">
              <div className="flex">
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Image
                    src="/paint.svg" alt="AIGC Hot"
                    width="64"
                    height="64"
                  >
                  </Image>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time className="font-semibold">2023</time>
                  <span className="text-neutral-300" aria-hidden="true">|</span>
                  <span>AI Painting</span>
                </p>
                <p className="mt-6 font-display text-xl font-semibold text-neutral-950">
                  Unleash Your Creativity
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Transform your text descriptions into stunning AI-generated artworks. Experience the fusion of AI and artistic expression as AIGC generates unique and captivating visuals tailored to your inputs.
                </p>
                </article>
              </div>
            </Link>
            <Link href="/hot">
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <Image
                  src="/hot.svg" alt="AIGC Hot"
                  width="64"
                  height="64"
                >
                </Image>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time className="font-semibold">2023</time>
                  <span className="text-neutral-300" aria-hidden="true">|</span>
                  <span>Hot</span>
                </p>
                <p className="mt-6 font-display text-xl font-semibold text-neutral-950">
                  This Is The Hot List
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  Transform your text descriptions into stunning AI-generated artworks. Experience the fusion of AI and artistic expression as AIGC generates unique and captivating visuals tailored to your inputs.
                </p>
              </article>
            </div>
            </Link>

            <Link href="">
            <div className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                2303
              </article>
            </div>
            </Link>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
