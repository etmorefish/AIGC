import Head from 'next/head';
import React from 'react'
import Nav from './nav';
import Footer from './footer';

const RootLayout = ({children, meta}: any) => {
    const {title, description, icon} = meta;
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon || "/favicon.ico"} />
    </Head>
    <div className='h-screen'>
        <Nav/>
        <div className='flex-grow  flex-col overflow-auto'>{children}</div>
        <Footer/>
    </div>
    </>
  )
}

export default RootLayout