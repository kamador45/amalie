import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import {LightTheme} from "../Themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={LightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
