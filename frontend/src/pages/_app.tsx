import { CartProvider } from '@/contexts/cartContext'

import '@/styles/globals.css'

import type { AppPropsWithLayout } from '_app-types'

export default function App ({ Component, pageProps }: AppPropsWithLayout): React.ReactNode {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <CartProvider>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </CartProvider>
  )
}
