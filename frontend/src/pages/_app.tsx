import type { AppPropsWithLayout } from '@/next-pages'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }: AppPropsWithLayout): React.ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />, pageProps)
}
