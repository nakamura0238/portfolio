import '@/styles/globals.css'
import '@/styles/destyle.css'
import '@/styles/base.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
