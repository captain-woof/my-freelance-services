import type { AppProps } from 'next/app'
import Navbar from '../components/molecules/navbar'
import NavbarProvider from '../components/providers/navbar'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <NavbarProvider>
      <Navbar />
      <Component {...pageProps} />
    </NavbarProvider>
  )
}

export default MyApp
