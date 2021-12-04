import { CssBaseline } from '@material-ui/core'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Navbar from '../components/atoms/navbar'
import NavbarProvider from '../components/providers/navbar'
import MaterialThemeProvider from '../components/providers/theme'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {

  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <MaterialThemeProvider>
      <NavbarProvider>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
      </NavbarProvider>
    </MaterialThemeProvider>
  )
}

export default MyApp
