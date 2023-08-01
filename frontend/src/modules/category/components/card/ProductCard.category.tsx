import Link from 'next/link'

import { Heart, Text } from '@/components'
import { ProductDetails } from './ProductDetails.category'
import { ProductImage } from './ProductImage.category'

import type { ProductCard } from '@/models'
import type { ElementRef, FC, ReactElement } from 'react'
import type { BaseComponentProps } from '@/schemas'

type ProductCardProps = Pick<BaseComponentProps, 'className'> & {
  element: Pick<
    ProductCard,
    'name' | 'rating' | 'price' | 'discount' | 'image' | 'brand' | 'id' | 'category'
  >
}

export const ProductsCard: FC<ProductCardProps> = ({
  element: { name, image, price, discount, rating, brand, category, id },
  className
}): ReactElement => {
  const handleClick = (e: React.MouseEvent<ElementRef<'span'>>) => e.preventDefault()
  return (
    <Link href='/[category]/[productId]' as={`/${category}/${id}`}>
      <div
        className={`group/card bg-gray-100 hover:bg-gray-200 border shadow-sm hover:shadow-md rounded-sm hover:rounded-sm transition-transform transform duration-[100ms] easy-in-out hover:scale-[1.03] ${className} h-full flex flex-col relative`}>
        <Text className='hidden group-hover/card:block bg-gray-100 group-hover/card:bg-gray-200 capitalize absolute top-[0.9%] left-[1.4%] md:top-[1%] md:left-[1.7%] z-30 rounded-br-md px-1 max-lg:text-sm lg:text-md font-semibold text-stone-700 border-r border-b shadow-b shadow-r'>
          {brand}
        </Text>
        <span onClick={handleClick}>
          <Heart className='absolute top-[3%] right-[5%] w-7 h-7 lg:w-8 lg:h-8 z-20 hidden group-hover/card:block' />
        </span>
        <ProductImage image={image} />
        <ProductDetails price={price} discount={discount} rating={rating} name={name} />
      </div>
    </Link>
  )
}
