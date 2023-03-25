import { ChangeEvent, FormEvent, ReactElement, ReactNode, SetStateAction } from 'react'

type FilterFunction = ((product: Products) => boolean)

type CustomMethodsProps = [boolean, (() => void)]
export type SessionMode = "login" | "register";

export interface RootLayout {
  children: ReactNode;
  title: string;
}

export interface HeaderLinks {
  path: string;
  label: string;
  links?: {
    path: string;
    label: string;
  }[];
}

export interface HeaderActionProps {
  links: HeaderLinks[]
}



export interface CustomHeaderProps {
    drawer: CustomMethodsProps
    links: HeaderLinks[]
}

export interface CustomDrawerProps extends CustomHeaderProps {
    collapse: CustomMethodsProps
}

export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export interface ProductCardProps {
  element: {
    name: string
    rating: number
    price: number
    discount?: number
    image: { src: string }
  }
}

export interface CategoryServerSideProps {
  params: {
    category: string
  }
}

export interface Products { 
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
  products: Products[]
  brands: string[]
}

// User Session

export interface FormTypes {
  name?: string;
  email: string;
  password: string;
}

export interface SessionRequestProps {
  form: FormTypes;
  mode: SessionMode;
}

export interface UserSessionTools {
    form: FormTypes,
    setInput: (event: ChangeEvent<HTMLInputElement>) => void
    setSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export interface BackgroundWrapperProps {
  children: ReactElement;
  padTop: number;
}

export interface CreateBlockProps {
  d: string;
  className: string;
  alt: string;
}

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

export interface CategoryFiltersProps {
  children: React.ReactNode
}

export interface CategoryNextFilterProps {
  onChange: (filter: FilterFunction | null) => void
  currentCategory?: string | string[]
}

export interface CategoryBrandsFilterProps extends CategoryNextFilterProps {
  brands: string[]
}

export interface Filters {
  name: null | FilterFunction
  brand: null | FilterFunction
}
