import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Work_Sans } from '@next/font/google'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={workSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
