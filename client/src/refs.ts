import { HeaderLinks } from "additional";

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


export const footer = {
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
