type Image = {
  src: string
}

export interface Cover {
  id: string
  brand: string
  image: Image
  alt: string
  category: string
  discount: number
}

export interface EndpointCover {
  _id: string
  brand: string
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
