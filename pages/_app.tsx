import type { AppProps } from 'next/app'
import Seo from '../components/meta/seo'
import Navbar from '../components/molecules/navbar'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Navbar />
      <Seo />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
