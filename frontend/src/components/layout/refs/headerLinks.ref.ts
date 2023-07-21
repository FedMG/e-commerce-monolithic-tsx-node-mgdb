// later refactor
interface Links {
  path: string
  name: string
}

export type HeaderLinks = Links & { dropdown?: Links[] }

export const headerLinks: HeaderLinks[] = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '#categories',
    name: 'Categories',
    dropdown: [
      {
        path: "/men's clothing",
        name: "Men's clothing"
      },
      {
        path: "/women's clothing",
        name: "Women's clothing"
      },
      {
        path: '/shoes',
        name: 'Shoes'
      },
      {
        path: '/accessory',
        name: 'Accesories'
      }
    ]
  }
]
