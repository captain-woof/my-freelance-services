import type { AppProps } from 'next/app'
import Seo from '../components/meta/seo'
import Footer from '../components/molecules/footer'
import Navbar from '../components/molecules/navbar'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Seo />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
