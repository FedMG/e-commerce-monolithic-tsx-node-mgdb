interface FooterLinkItem {
  name: string
  path: string
}

type FooterLinks = FooterLinkItem & { links?: FooterLinkItem[] }
interface FooterProps {
  links: FooterLinks[]
}

export const footerLinks: FooterLinks[] = [
  {
    name: 'About',
    path: '',
    links: [
      {
        name: 'Features',
        path: '#'
      },
      {
        name: 'Pricing',
        path: '#'
      },
      {
        name: 'Payments methods',
        path: '#'
      }
    ]
  },
  {
    name: 'Policy',
    path: '',
    links: [
      {
        name: 'Privacy Policy',
        path: '#'
      },
      {
        name: 'Terms of Service',
        path: '#'
      },
      {
        name: 'Consumer Rights',
        path: '#'
      }
    ]
  },
  {
    name: 'Help',
    path: '',
    links: [
      {
        name: 'Common Questions',
        path: '#'
      },
      {
        name: 'Support',
        path: '#'
      },
      {
        name: 'Contact us',
        path: '#'
      }
    ]
  }
]
