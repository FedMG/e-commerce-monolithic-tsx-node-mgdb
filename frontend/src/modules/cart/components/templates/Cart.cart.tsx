import { Children, cloneElement } from 'react'

type Props = { children: React.ReactElement }

export const Cart = ({ children }: Props) => (
  <>
    {Children.map(children, child => {
      return cloneElement(child)
    })}
  </>
)

const Details = ({ children }: Props) => (<>{ children }</>)
const Controls = ({ children }: Props) => (<>{ children }</>)
const Item = ({ children }: Props) => (<>{ children }</>)
const Image = ({ children }: Props) => (<>{ children }</>)
const Aside = ({ children }: Props) => (<>{ children }</>)


Cart.Image = Image
Cart.Details = Details
Cart.Controls = Controls
Cart.Aside = Aside
Cart.Item = Item
