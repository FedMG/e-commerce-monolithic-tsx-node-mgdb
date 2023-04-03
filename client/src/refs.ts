import { FooterLinks, HeaderLinks } from "additional";

export const filterStructure = {
  name: null,
  brand: null,
  discount: null
}


export const headerLinks: HeaderLinks[] =  [
    {
      "path": "/",
      "name": "Home"
    },
    {
      "path": "/about",
      "name": "About"
    },
    {
      "path": "#categories",
      "name": "Categories",
      "dropdown": [
        {
          "path": "/men's clothing",
          "name": "Men's clothing"
        },
        {
          "path": "/women's clothing",
          "name": "Women's clothing"
        },
        {
          "path": "/beauty",
          "name": "Beauty"
        },
      ]
    }
  ]

export const footerLinks: FooterLinks[] = [
    {
      name: "About",
      path: '',
      links: [
        {
          name: "Features",
          path: '#',
        },
        {
          name: "Pricing",
          path: "#",
        },
        {
          name: "Payments methods",
          path: "#",
        },
      ],
    },
    {
      name: "Policy",
      path: '',
      links: [
        {
          name: "Privacy Policy",
          path: "#",
        },
        {
          name: "Terms of Service",
          path: "#",
        },
        {
          name: "Consumer Rights",
          path: "#",
        },
      ],
    },
    {
      name: "Help",
      path: '',
      links: [
        {
          name: "Common Questions",
          path: "#",
        },
        {
          name: "Support",
          path: "#",
        },
        {
          name: "Contact us",
          path: "#",
        },
      ],
    },
  ]
