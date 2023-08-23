import { classNames } from '../components/utils'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amiri, Urbanist } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
const amiri = Amiri({ subsets: ['arabic'], style: 'normal', weight: '400' })
const urbanist = Urbanist({
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-urbanist',
  preload: true,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(amiri.className, urbanist.variable)}>
      <Component {...pageProps} />
      <Toaster />
    </main>
  )
}
