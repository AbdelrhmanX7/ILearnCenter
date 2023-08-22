import { classNames } from '../components/utils'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amiri, Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
const amiri = Amiri({ subsets: ['arabic'], style: 'normal', weight: '400' })
const montserrat = Montserrat({
  subsets: ['cyrillic'],
  style: 'normal',
  variable: '--font-montserrat',
  preload: true,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={classNames(amiri.className, montserrat.variable)}>
      <Component {...pageProps} />
      <Toaster />
    </main>
  )
}
