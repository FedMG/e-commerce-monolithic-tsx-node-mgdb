import { Colors } from '@/modules/product/enums'
import type { GetValues } from '@/utilities'

export type StarsRange = 1 | 2 | 3 | 4 | 5
export type ClothingSizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'
export type ProductColors = GetValues<typeof Colors>
export type Brands =
| 'nike'
| 'puma'
| 'zara'
| 'versace'
| 'gucci'
| 'calvin klein'
| 'converse'
| 'topper'
| 'chanel'
| 'addidas'


export interface ProductRatingProps {
  stars: StarsRange
  votes: number
}

interface Description {
  introduction: string
  body: string
  conclusion: string
}

interface Image {
  src: string
}

export interface Product {
  id: string
  name: string
  image: Image
  category: string
  brand: Brands
  description: Description
  stock: number
  price: number
  discount?: number | null
  colors: ProductColors[]
  sizes: ClothingSizes[]
  rating: ProductRatingProps
}

export interface ProductCard {
  id: string
  name: string
  image: Image
  category: string
  brand: Brands
  price: number
  discount?: number | null
  rating: ProductRatingProps
  createdAt: Date
}

// External services response
export interface ProductsResponse {
  products: EndpointProduct[]
  numHits: number
}

export interface ProductIdResponse {
  product: EndpointProduct
}

export interface EndpointProduct {
  _id: string
  name: string
  image: Image
  category: string
  brand: Brands
  description: Description
  stock: number
  price: number
  discount?: number
  colors: ProductColors[]
  sizes: ClothingSizes[]
  rating: ProductRatingProps
  createdAt: Date
  __v: number
}

export interface ProductPropertyResponse<T> {
  uniqueValues: T[]
}
