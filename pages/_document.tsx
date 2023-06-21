import Footer from '@/components/layout/footer'
import Nav from '@/components/layout/nav'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className=''>
      <Head />
      <body className='bg-white dark:bg-black'>
        <Nav />
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
