import Head from 'next/head'

import { HeaderPage } from './HeaderPage'
import { Footer } from './structure/Footer'

import { footerLinks, headerLinks } from '@/refs'
import { isString, setUpperCase } from '@/utils'

import type { RootLayout } from '_app-types'

export const Layout: React.FC<RootLayout> = ({ children, title, section }) => {
  const isTitleWithSection = isString(section) ? `${title} | ${setUpperCase(section as string)}` : `${title}`

  return (
    <>
      <Head>
        <meta name='description' content='An E-commerce project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/e-cart.ico' />
        <title>{isTitleWithSection}</title>
      </Head>
      <div className='bg-gray-50 h-full relative pb-20'>
        <HeaderPage links={headerLinks} />
        <main className='h-full min-h-screen max-h-full'>{children}</main>
        <Footer links={footerLinks} />
      </div>
    </>
  )
}
