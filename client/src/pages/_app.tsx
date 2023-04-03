import { AppPropsWithLayout } from '_app-types'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)    
  return getLayout(<Component {...pageProps} />, pageProps)
}
