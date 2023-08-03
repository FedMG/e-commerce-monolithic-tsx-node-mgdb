import { Text } from '@/components'
import { applyDiscount } from '@/utils'
import { StarIcon } from '@/assets'

import type { BaseComponentProps } from '@/schemas'
import type { FC, ReactElement } from 'react'
import type { ProductCard } from '@/models'

// later refactor with a compound
type ProductDetailsProps = Pick<ProductCard, 'price' | 'discount' | 'rating' | 'name'>
type Children = Pick<BaseComponentProps, 'children'>

const ProductOldPrice: FC<Children> = ({ children }) => (
  <Text className='-ml-1 select-none text-gray-600 font-semibold text-sm lg:text-md'>
    <del>${children}</del>
  </Text>
)

const ProductRating: FC<Children> = ({ children }) => (
  <Text className='leading-normal text-gray-700 font-medium text-md md:text-lg flex items-center'>
    <StarIcon className='fill-orange-500 w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5' />
    {children}
  </Text>
)

const ProductPrice: FC<Children> = ({ children }) => (
  <Text className='font-bold text-md lg:text-lg text-gray-800 leading-tight'>{children}</Text>
)

const ProductDiscount: FC<Children> = ({ children }) => (
  <Text className='pb-[0.3rem] pl-0.5 lg:pl-1 text-green-600 text-xs lg:text-sm font-medium'>
    -{children}% OFF
  </Text>
)

const ProductName: FC<Children> = ({ children }) => (
  <div className='shadow-bottom absolute -bottom-3 left-0 w-full px-2 pb-1 opacity-0 group-hover/card:opacity-100 bg-gray-200 truncate border-b rounded-bl-md rounded-br-md border-x'>
    <Text className='text-gray-700 capitalize leading-normal max-lg:text-md lg:text-lg pt-1 lg:pt-1.5'>
      {children}
    </Text>
  </div>
)

export const ProductDetails: FC<ProductDetailsProps> = ({
  discount,
  price,
  rating,
  name
}): ReactElement => {
  if (!discount) {
    return (
      <div className='w-full p-[0.3em] pt-0 pb-1 sm:p-[0.5em] sm:pt-0 sm:pb-1.1 md:p-[0.6em] md:pt-1 md:pb-2 flex-end'>
        <div className='w-full relative pb-3'>
          <span className='apect-ratio -ml-1' />
          <div className='w-full flex justify-between items-center'>
            <ProductPrice>${price}</ProductPrice>
            <ProductRating>{rating.stars}</ProductRating>
          </div>
        </div>
        <ProductName>{name}</ProductName>
      </div>
    )
  }

  return (
    <div className='w-full p-[0.3em] pt-0 pb-1 sm:p-[0.5em] sm:pt-0 sm:pb-1.1 md:p-[0.6em] md:pt-1 md:pb-2 flex-end'>
      <div className='w-full relative pb-3'>
        <ProductOldPrice>{price}</ProductOldPrice>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center'>
            <ProductPrice>${applyDiscount({ discount, price })}</ProductPrice>
            <ProductDiscount>{discount}</ProductDiscount>
          </div>
          <ProductRating>{rating.stars}</ProductRating>
        </div>
      </div>
      <ProductName>{name}</ProductName>
    </div>
  )
}
