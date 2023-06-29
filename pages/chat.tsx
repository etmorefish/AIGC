import Input from '@/components/chat/Input'
import Head from 'next/head'
import React, { useState } from 'react'
import RootLayout from '@/components/layout/RootLayout';
const chat = () => {
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#108ee9',
  };

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  return (
    <>
      <Head>
        <title>AIGC - Chat</title>
        <meta name="description" content="A free platform by Eatmorefishs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RootLayout meta={{
        title: 'AIGC',
        description: 'A free platform by Eatmorefishs.'
      }}>
        <div className='flex text-center text-gray-800 dark:text-gray-100 font-bold'>
          <Input />
        </div>
      </RootLayout>
    </>
  )
}

export default chat