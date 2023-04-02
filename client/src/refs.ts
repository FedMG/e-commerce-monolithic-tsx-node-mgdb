import { HeaderLinks } from "additional";

export const filterStructure = {
  name: null,
  brand: null,
  discount: null
}


export const headerLinks: HeaderLinks[] = [
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
