import type { ChangeEvent, FormEvent, ReactElement, ReactNode, SetStateAction } from 'react'
import { SortBy } from 'enums';

// utils
export type ChildrenNode = {
  children: ReactNode
}

interface ConstantProps {
  className: string
  name: string
}

// type Id<T> = T extends string ? StringId : NumberId

// SVG
export type SVGIconProps = ChildrenNode & Pick<ConstantProps, 'className'>

export interface SVGPathProps {
  d: string
}


// Header
type Links = {
  path: string
  name: string
}
export type HeaderLinks = Links & { dropdown?: Links[] }

export interface HeaderProps {
  links: HeaderLinks[]
  bgColor?: string
}

export interface HeaderButtonsProps {
  setIsMenuOpen: (isOpen: boolean) => void
  isMenuOpen: boolean
}

export interface HeaderLogoProps {
  name: string
  pathLogo: string
}

export type HeaderNavigationProps = ChildrenNode & Pick<HeaderButtonsProps, 'isMenuOpen'> & Pick<HeaderProps, 'bgColor'>

export interface HeaderDropdownProps extends Pick<HeaderProps, 'links'> {
  label: string
}



// Footer
type FooterLinkItem = {
  name: string
  path: string
}

export type FooterLinks = FooterLinkItem & { links?: FooterLinkItem[] }

export interface FooterProps {
  links: FooterLinks[]
}

interface FooterLinkIconProps {
  path: string
  d: string
  alt: string
}


// User session page
export type SessionMode = "login" | "register"

export interface FormTypes {
  name?: string;
  email: string;
  password: string;
}

export interface SessionRequestProps {
  form: FormTypes
  mode: SessionMode
}

export interface UserSessionTools {
  form: FormTypes
  setInput: (event: ChangeEvent<HTMLInputElement>) => void
  setSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}


// About page
export interface CreateBlobProps  {
  children: ReactElement
  className: string
}


// Product item
export interface Product { 
  _id: string
  name: string
  image: {
    src: string
  }
  category: string
  description?: string
  price: number
  discount?: number
  rating: number
  brand: string
  createdAt: Date
  __v: number
}


// Category page
export type ProductSortFunction = (a: Product, b: Product) => number
type FilterFunction = ((product: Product) => boolean)

export interface CategoryProps {
  products: Product[]
  discounts: number[]
  brands: string[]
  currentCategory: string
}

export interface CategoryNextFilterProps {
  onChange: (filter: FilterFunction | null) => void
  currentCategory?: string | string[]
}

export interface CategorySearchFilterProps extends CategoryNextFilterProps {
  productsNumber: number
}

export interface CategoryBrandsFilterProps extends CategoryNextFilterProps {
  brands: string[]
}

export interface CategorySortFilterProps {
  onChange: (sortType: SortBy) => void
  sortBy: SortBy
}

export interface CategoryDiscountsFilterProps extends CategoryNextFilterProps {
  discounts: number[]
}


// Product id page
export interface ProductProps {
  product: Product
}


// Product cards
export interface ProductCardProps {
  element: Pick<Product, 'name' | 'rating' | 'price' | 'discount' | 'image'>
}

export interface DiscountInfoProps {
  children: ReactElement[]
  discount?: number
  price: number
}


