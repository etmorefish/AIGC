import Input from '@/components/chat/Input'
import { DownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Head from 'next/head'
import React from 'react'

const chat = () => {
  return (
    <>
      <Head>
        <title>AIGC - Chat</title>
        <meta name="description" content="A free platform by Eatmorefishs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='text-center text-gray-800 dark:text-gray-100 font-bold'>

        <Input />
        
        <Button className='bg-sky-700 dark:bg-red-700' type="primary" shape="round" icon={<DownloadOutlined />} size={'small'} >
          Download
        </Button>
      </div>




    </>
  )
}

export default chat