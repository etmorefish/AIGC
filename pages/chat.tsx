import Input from '@/components/chat/Input'
import { DownloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Head from 'next/head'
import { Layout } from 'antd';
import React, { useState } from 'react'
const { Header, Footer, Sider, Content } = Layout;
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

      <div className='text-center text-gray-800 dark:text-gray-100 font-bold'>

       
        
        {/* <Button className='bg-sky-700 dark:bg-red-700' type="primary" shape="round" icon={<DownloadOutlined />} size={'small'} >
          Download
        </Button> */} 
        
      <Layout hasSider className='h-5/6'>
        <Sider style={siderStyle} className='h-80'>Sider</Sider>
        <Content style={contentStyle} className='h-80'> <Input /></Content>
      </Layout>
      </div>

        
   



    </>
  )
}

export default chat