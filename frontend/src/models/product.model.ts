import { Colors } from '@/modules/product'
import type { GetValues } from '@/utilities'

export type StarsRange = 1 | 2 | 3 | 4 | 5
export type ClothingSizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'
export type ProductColors = GetValues<typeof Colors>

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
  brand: string
  description: Description
  stock: number
  price: number
  discount?: number | null
  colors: ProductColors[]
  sizes: ClothingSizes[]
  rating: ProductRatingProps
  createdAt: Date
}

export type ProductCard = Omit<Product, 'colors' | 'sizes' | 'description' | 'stock'>

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
  brand: string
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
