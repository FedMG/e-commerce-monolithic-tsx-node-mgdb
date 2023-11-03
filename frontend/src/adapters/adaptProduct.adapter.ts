import type { Product, ProductIdResponse } from '@/models'

export const adaptProduct = (response: ProductIdResponse): Product => {
  const { product } = response
  return {
    id: product._id,
    name: product.name,
    image: product.image,
    category: product.category,
    brand: product.brand,
    description: product.description,
    stock: product.stock,
    price: product.price,
    discount: product.discount || null,
    colors: product.colors,
    sizes: product.sizes,
    rating: product.rating
  }
}
