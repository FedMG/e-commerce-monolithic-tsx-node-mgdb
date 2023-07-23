import { ProductsResponse, Product } from '@/models'

export const adaptAllProducts = (response: ProductsResponse): Product[] => {
  const { products } = response

  return products.map(product => ({
    id: product._id,
    name: product.name,
    image: product.image,
    category: product.category,
    brand: product.brand,
    description: product.description,
    stock: product.stock,
    price: product.price,
    discount: product.discount,
    colors: product.colors,
    sizes: product.sizes,
    rating: product.rating,
    createdAt: product.createdAt
  }))
}

