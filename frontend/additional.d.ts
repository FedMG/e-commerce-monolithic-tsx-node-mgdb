import { Product } from '@/models'
import type { AriaAttributes, ChangeEvent, ReactNode } from 'react'
import type { Callback, DropUndefined } from 'utilities'

// Refactor for prepare to update architecture app folder

// ALIASES
interface AliasComponentsProps {
  children: ReactNode
  className: string
}

// CONSTANTS
export interface ChildrenNode {
  children: ReactNode
}

interface ConstantProps {
  className: string
  name: string
}

interface CallbackEvents {
  onClick: () => void
  onMouseDown: () => void
  onMouseUpLeave: () => void
}

// LINK-BUTTON
export interface LinkButtonProps {
  children: ReactNode
  href: string
  className: string
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export interface LinkEventButtonProps extends LinkButtonProps {
  onClick: () => void
}

// BUTTON
export interface ButtonProps {
  children: ReactNode
  onClick: () => void
  className: string
  ariaExpanded: DropUndefined<AriaAttributes, 'aria-expanded'>
}

export interface HamburgerDropdownProps extends ButtonProps {
  ariaControls: DropUndefined<AriaAttributes, 'aria-controls'>
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

export interface DropdownButtonProps extends ButtonProps {
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
  ariaHaspopup: DropUndefined<AriaAttributes, 'aria-haspopup'>
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

// User session page
export interface InputProps {
  value?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  auto: string
  placeholder?: string
  type: 'text' | 'email' | 'password'
}

export interface LabelProps {
  id: 'name' | 'email' | 'password'
  name: string
}

export interface SessionPageProps {
  session: {
    title: string
    linkName: string
    linkText: string
  }
}

// type StarsRange = 1 | 2 | 3 | 4 | 5

// export type ClothingSizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'
// export type ProductColors =
//   | 'rose 500'
//   | 'orange 600'
//   | 'yellow 400'
//   | 'lime 400'
//   | 'green 500'
//   | 'cyan 600'
//   | 'violet 600'
//   | 'fuchsia 500'
//   | 'pink 600'
//   | 'neutral 900'
//   | 'stone 600'
//   | 'slate 900'
//   | 'white'
//   | 'black'

// export interface ProductRatingProps {
//   stars: StarsRange
//   votes: number
// }

// // Product item
// export interface Product {
//   _id: string
//   name: string
//   image: {
//     src: string
//   }
//   category: string
//   description: {
//     introduction: string
//     body: string
//     conclusion: string
//   }
//   stock: number
//   price: number
//   discount?: number
//   colors: ProductColors[]
//   sizes: ClothingSizes[]
//   rating: ProductRatingProps
//   brand: string
//   createdAt: Date
//   __v: number
// }

// Product cards
export interface ProductCardProps {
  element: Pick<Product, 'name' | 'rating' | 'price' | 'discount' | 'image'>
}

export interface HeartProps {
  className?: AliasComponentsProps['className']
}

// api/utils
export type GetEndpointResponse = (extra: string) => Promise<any>

export interface APIResponse {
  token: string
  user?: object
}

// hooks
export interface useNumberInputResult {
  addItem: Callback<void>
  dropItem: Callback<void>
  reset: Callback<void>
  result: number
}

export interface PaginationReducer {
  state: {
    items: Product[]
    page: number
  }
  action: {
    type: string
    chunk?: Product[]
    items?: Product[]
  }
}

type useSwapEventProps = [boolean, () => void]
