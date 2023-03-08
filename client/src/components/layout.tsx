import Head from 'next/head'
import { HeaderLinks, RootLayout } from 'additional'

import { HeaderAction } from './structure/Header'
import { FooterLinks } from "./structure/Footer";

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
          "path": "/men's clothing",
          "label": "Men's clothing"
        },
        {
          "path": "/women's clothing",
          "label": "Women's clothing"
        },
        {
          "path": "/beauty",
          "label": "Beauty"
        },
      ]
    }
  ]


const footer = {
  data: [
    {
      title: "About",
      links: [
        {
          label: "Features",
          link: "#",
        },
        {
          label: "Pricing",
          link: "#",
        },
        {
          label: "Payments methods",
          link: "#",
        },
      ],
    },
    {
      title: "Policy",
      links: [
        {
          label: "Privacy Policy",
          link: "#",
        },
        {
          label: "Terms of Service",
          link: "#",
        },
        {
          label: "Consumer Rights",
          link: "#",
        },
      ],
    },
    {
      title: "Help",
      links: [
        {
          label: "Common Questions",
          link: "#",
        },
        {
          label: "Support",
          link: "#",
        },
        {
          label: "Contact us",
          link: "#",
        },
      ],
    },
  ],
};



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
      <FooterLinks data={footer.data} />
    </>
  )
}