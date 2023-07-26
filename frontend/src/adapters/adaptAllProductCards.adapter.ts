import { ProductCard, ProductsResponse } from '@/models'

export const adaptAllProductCards = (response: ProductsResponse): ProductCard[] => {
  const { products } = response

  return products.map(product => ({
    id: product._id,
    name: product.name,
    image: product.image,
    category: product.category,
    brand: product.brand,
    price: product.price,
    discount: product.discount || null,
    rating: product.rating,
    createdAt: product.createdAt
  }))
}
