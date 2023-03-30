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




export const blobs = [
  {
    d: "M13.3,-23.2C17.6,-18,21.7,-14.9,26.2,-10.4C30.8,-5.9,35.8,0,35.3,5.2C34.7,10.3,28.5,14.8,23.7,20.9C19,27,15.7,34.8,10.6,36.6C5.4,38.4,-1.7,34.2,-7.2,30.1C-12.7,26,-16.6,21.8,-22.7,17.9C-28.8,14,-37.2,10.3,-38.5,5.2C-39.8,0.1,-34,-6.4,-29.7,-12.6C-25.4,-18.9,-22.6,-24.9,-17.9,-29.9C-13.2,-34.9,-6.6,-38.9,-1.1,-37.2C4.5,-35.6,9,-28.4,13.3,-23.2Z",
  },
  {
    d: "M21.1,-29.1C28.6,-23.6,36.8,-19.1,39.4,-12.5C42,-5.9,38.9,2.9,36.1,11.7C33.2,20.5,30.5,29.4,24.5,34.2C18.5,39.1,9.3,39.9,1.9,37.3C-5.5,34.7,-11.1,28.8,-17.2,24C-23.3,19.2,-30,15.6,-34.9,9.2C-39.9,2.9,-43.1,-6.1,-39.5,-11.5C-35.9,-16.9,-25.5,-18.8,-17.8,-24.3C-10,-29.7,-5,-38.7,0.9,-40C6.8,-41.2,13.6,-34.6,21.1,-29.1Z",
  },
//   {
//     d: "M25.8,-32.6C30.6,-26.6,29.9,-15.9,28.9,-7.2C27.8,1.4,26.5,8,23.5,13.9C20.5,19.8,15.8,25.1,9.3,28.9C2.8,32.7,-5.4,35,-13.8,33.8C-22.2,32.5,-30.9,27.6,-32.2,20.8C-33.4,13.9,-27.4,5.1,-25.5,-4.3C-23.7,-13.8,-26,-23.7,-22.4,-29.9C-18.9,-36,-9.4,-38.4,0.5,-39C10.5,-39.6,20.9,-38.5,25.8,-32.6Z",
//   },
//   {
//     d: "M21.5,-13.3C25.5,-5.4,25,4.4,20.6,14C16.3,23.7,8.1,33.3,-1.6,34.2C-11.4,35.1,-22.7,27.4,-29.3,16.5C-35.9,5.5,-37.7,-8.6,-32,-17.5C-26.3,-26.4,-13.1,-30,-2.2,-28.7C8.7,-27.4,17.4,-21.3,21.5,-13.3Z",

//   },
];
