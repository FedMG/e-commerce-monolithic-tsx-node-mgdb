import Head from 'next/head'

import { HeaderAction } from './structure/Header'
import { FooterLinks } from "./structure/Footer";

import { footer, headerLinks } from '@/refs';

import { RootLayout } from 'additional'

export const Layout: React.FC<RootLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name='description' content='An E-commerce project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/e-cart.ico' />
        <title>{title}</title>
      </Head>
      <HeaderAction links={headerLinks} />
      <main>{children}</main>
      <FooterLinks data={footer.data} />
    </>
  )
}