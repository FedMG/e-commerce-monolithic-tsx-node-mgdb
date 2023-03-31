import type { ChangeEvent, FormEvent, ReactElement, ReactNode, SetStateAction } from 'react'
import { SortBy } from 'enums';


// Header
type Links = {
  path: string
  label: string
}

export type HeaderLinks = Links & { links?: Links[] }


export interface HeaderActionProps {
  links: HeaderLinks[]
}

type HeaderMethods = [boolean, (() => void)]

export type CustomHeaderProps = HeaderActionProps & {
  drawer: HeaderMethods
}

export type CustomDrawerProps = CustomHeaderProps & {
  collapse: HeaderMethods
}

export interface FooterLinksProps {
  data: {
    title: string
    links: { label: string; link: string }[]
  }[]
}

export interface ProductCardProps {
  element: Pick<Product, 'name' | 'rating' | 'price' | 'discount' | 'image'>
}

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

export interface CategoryProps {
  products: Product[]
  discounts: number[]
  brands: string[]
}

export interface ProductProps {
  product: Product
}

// User Session
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

type Id<T> = T extends string ? StringId : NumberId

export interface BackgroundWrapperProps {
  children: ReactElement;
  padTop: number;
}

export interface CreateBlockProps {
  d: string;
  className: string;
  alt: string;
}


// Category component
export type ProductSortFunction = (a: Product, b: Product) => number
type FilterFunction = ((product: Product) => boolean)

export interface CategoryFiltersProps {
  children: ReactNode
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

// Category product cards
export interface DiscountInfoProps {
  children: ReactElement[];
  discount?: number;
  price: number;
  classes: {
    priceRatingContainer: string;
    discountInfoContainer: string;
    originalPrice: string;
    discount: string;
  };
}
