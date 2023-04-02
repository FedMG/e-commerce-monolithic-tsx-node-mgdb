import Head from 'next/head'

import { HeaderAction } from './structure/Header'
import { FooterLinks } from "./structure/Footer";

import { footer, headerLinks } from '@/refs';
import { isString, setUpperCase } from '@/utils';

import type { RootLayout } from '_app-types';


export const Layout: React.FC<RootLayout> = ({ children, title, section }) => {
  const isTitleWithSection = isString(section) ? `${title} | ${setUpperCase(section as string)}`: `${title}`

  return (
    <>
      <Head>
        <meta name='description' content='An E-commerce project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/e-cart.ico' />
        <title>{isTitleWithSection}</title>
      </Head>
      <div className='bg-gray-50'>
      <HeaderAction links={headerLinks} />
      <main>{children}</main>
      <FooterLinks data={footer.data} />
      </div>
    </>
  )
}