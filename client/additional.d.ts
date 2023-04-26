import type { ChangeEvent, FormEvent, ReactElement, ReactNode } from 'react'
import { SortBy } from 'enums'

// utils
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

// utilities
type AddOptional<Type> = { 
  [Property in keyof Type ]+?: Type[Property]
}

type AddCallback<Type, T> = {
  [Property in keyof Type ]+?: Callback<T>
}

type CallbackWithoutParams = () => void
type CallbackWith<T> = (params: T) => void
type Callback<T> = T extends void ? CallbackWithoutParams : CallbackWith<T>

// It does inference of callback types passed through T and return (P) the parameters types
type InferParamsType<T> = T extends (...args: infer P) => void ? P : T


// SVG
export type SVGIconProps = ChildrenNode & Pick<ConstantProps, 'className'>

export interface SVGPathProps {
  d: string
}

// Header
interface Links {
  path: string
  name: string
}
export type HeaderLinks = Links & { dropdown?: Links[] }

export interface HeaderProps {
  links: HeaderLinks[]
  bgColor?: string
}

export interface HeaderCommonProps extends HeaderProps {
  selectOption: Callback<void>
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

export type HeaderNavigationProps = ChildrenNode & Pick<HeaderButtonsProps, 'isMenuOpen'> & Pick<HeaderCommonProps, 'bgColor' | 'selectOption'>
export type HeaderMenuListProps = HeaderCommonProps & {
  spacing?: boolean
}

export interface HeaderDropdownProps extends Pick<HeaderCommonProps, 'links' | 'selectOption'> {
  label: string
}

// Footer
interface FooterLinkItem {
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
export interface InputProps {
 value?: string
 onChange: (e: ChangeEvent<HTMLInputElement>) => void
 auto: string
 placeholder?: string
 type: 'text' | 'email' | 'password'
}

export type LabelProps = {
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

export type SessionMode = 'login' | 'register'

export interface FormTypes {
  name?: string
  email: string
  password: string
}

export interface SessionRequestProps {
  form: FormTypes
  mode: SessionMode
}

export interface UserSessionTools {
  form: FormTypes
  setInput: (event: ChangeEvent<HTMLInputElement>) => void
  setSubmit: (event: FormEvent<HTMLFormElement>) => void
}

// About page
export interface CreateBlobProps {
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

export type ProductButtonProps = AddOptional<ChildrenNode> & AddOptional<CallbackEvents> & {
  name?: string
  rounded?: string
}

export type ClothingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ProductVariants = 'rose 500' | 'orange 600' | 'yellow 400' | 'lime 400' | 'green 500' | 'cyan 600' | 'violet 600' | 'fuchsia 500' | 'pink 600' | 'neutral 950'

export interface ProductsNumberInputProps {
  itemsNumber: number
}

export interface NumberSVGInputProps {
  strokeWidth: number
  d: string
  srOnly: string
}

// api/utils
export type GetEndpointResponse = (extra: string) => Promise<any>

export interface GetSessionRequestsResponse {
  url: string
  requestOptions: {
    method: string
    headers: {
      'Content-Type': string
    }
    body: string
  }
}

export interface APIResponse { token: string, user?: object }

// hooks
export interface useNumberInputResult {
  addItem: Callback<void>,
  dropItem: Callback<void>,
  reset: Callback<void>,
  result: number
}


