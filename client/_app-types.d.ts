import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export interface RootLayout {
  children: ReactNode;
  title: string;
  section?: string
}
