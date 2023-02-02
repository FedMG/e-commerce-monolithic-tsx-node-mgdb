import Head from 'next/head'
import { HeaderLinks, RootLayout } from 'additional'

import { HeaderAction } from './structure/Header'

const headerLinks: HeaderLinks[] = [
    {
      "path": "/",
      "label": "Home"
    },
    {
      "path": "/about",
      "label": "About"
    },
    {
      "path": "#categories",
      "label": "Categories",
      "links": [
        {
          "path": "/electronics",
          "label": "Electronics"
        },
        {
          "path": "/beauty",
          "label": "Beauty"
        },
        {
          "path": "/clothes",
          "label": "Clothes"
        },
        {
          "path": "/jewellery",
          "label": "Jewellery"
        }
      ]
    }
  ]


export const Layout: React.FC<RootLayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name='description' content='An E-commerce project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
      <HeaderAction links={headerLinks} />
      <main>{children}</main>
    </>
  )
}