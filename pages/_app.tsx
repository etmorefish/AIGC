import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import Footer from '@/components/layout/footer'
import Nav from '@/components/layout/nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
