import type { Brands } from "./product.model"

type Image = {
  src: string
}

export interface Cover {
  id: string
  brand: Brands
  image: Image
  alt: string
  category: string
  discount: number
}

export interface EndpointCover {
  _id: string
  brand: Brands
  image: Image
  alt: string
  category: string
  discount: number
  createdAt: Date
  __v: number
}

export type CoversResponse = {
  covers: EndpointCover[]
  numHits: number
}
