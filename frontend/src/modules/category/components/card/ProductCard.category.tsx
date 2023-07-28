import Image from 'next/image'

import { ProductCardDiscountInfo } from './ProductDiscountInfo.category'
import { getPriceWithDiscount } from '@/utils'

import type { FC, ReactElement } from 'react'
import { ProductCard } from '@/models'

interface ProductCardProps {
  element: Pick<ProductCard, 'name' | 'rating' | 'price' | 'discount' | 'image'>
}

export const ProductsCard: FC<ProductCardProps> = ({ element: { name, image, price, discount, rating } }): ReactElement => (
  <div className='h-full max-h-[430px] flex flex-col bg-gray-100 border shadow-sm hover:shadow-md rounded-sm hover:bg-gray-200 hover:rounded-sm transition-transform transform duration-[100ms] easy-in-out hover:scale-[1.03]'>
    <div className='relative aspect-[2/3] h-full xl:max-h-[310px] lg:max-h-[295px] md:max-h-[300px] sm:max-h-[255px] xs:max-h-[240px] max-h-[310px] m-0.5 md:m-1 flex items-center from-white to-gray-300 bg-gradient-to-br border-b border-gray-300'>
    <Image priority sizes='100vw' quality={20} fill className='w-auto h-full max-h-[310px] select-none overflow-hidden object-cover' src={image.src} alt={`${name} card product`} />
    </div>

    <div className='w-full p-[0.3em] pt-0 pb-1 sm:p-[0.5em] sm:pt-0 sm:pb-1.1 md:p-[0.6em] md:pt-1 md:pb-2 flex-end  '>
      <ProductCardDiscountInfo discount={discount} price={price}>
        <p className='font-bold text-md lg:text-lg text-gray-800 leading-tight'>
          ${getPriceWithDiscount(discount, price)}
        </p>

        <span className='leading-normal text-gray-700 font-medium text-md md:text-lg'>
          <span className='text-orange-600'>⭐</span>
          {rating.stars}
        </span>
      </ProductCardDiscountInfo>

      <p className='text-gray-700 capitalize leading-normal max-lg:text-md lg:text-lg pt-1 lg:pt-1.5 line-clamp-2 truncate'>
        {name}
      </p>
    </div>
  </div>
)
