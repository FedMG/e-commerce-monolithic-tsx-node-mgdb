import Image from 'next/image'
import { getPriceWithDiscount } from '@/utils'

import type { DiscountInfoProps, ProductCardProps } from 'additional'
import type { FC, ReactElement } from 'react'

const DiscountInfo: FC<DiscountInfoProps> = ({ children, discount, price }): ReactElement | null => {
  if (children == null) return null

  if (discount === 0 || discount === undefined) {
    return (
      <div className='w-full relative'>
        <span className='apect-ratio -ml-1' />
        <div className='w-full flex justify-between items-center'>
          {children[0]}
          {children[1]}
        </div>
      </div>
    )
  }

  return (
    <div className='w-full relative'>
      <span className='-ml-1 select-none text-gray-600 font-semibold text-sm lg:text-md'>
        <del>${price}</del>
      </span>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center'>
          {children[0]}
          <span className='pb-[0.3rem] pl-0.5 lg:pl-3 text-green-600 text-xs lg:text-sm font-medium'>
            {' '}
            -{discount}% OFF
          </span>
        </div>
        {children[1]}
      </div>
    </div>
  )
}

export const ProductsCard: React.FC<ProductCardProps> = ({ element }) => {
  const { name, image, price, discount, rating } = element

  return (
    <div className='h-full max-h-[430px] flex flex-col bg-gray-200 shadow hover:shadow-md rounded-sm hover:bg-gray-300 transition transform duration-[100ms] easy-in-out hover:scale-[1.03]'>
      <div className='aspect-[2/3] h-full xl:max-h-[310px] lg:max-h-[295px] md:max-h-[300px] sm:max-h-[255px] xs:max-h-[240px] max-h-[310px] m-0.5 md:m-1 flex items-center from-white to-gray-300 bg-gradient-to-br border-b border-gray-300'>
        {/* later put the "width-auto" to the image */}
        <Image height={290} width={300} sizes='100vw' className='h-full max-h-[310px] select-none overflow-hidden' src={image.src} alt={`${name} card product`} />
      </div>

      <div className='w-full p-[0.3em] pt-0 pb-1 sm:p-[0.5em] sm:pt-0 sm:pb-1.1 md:p-[0.6em] md:pt-1 md:pb-2 flex-end  '>
        <DiscountInfo discount={discount} price={price}>
          <p className='font-bold text-md lg:text-lg text-gray-900 leading-tight'>
            ${getPriceWithDiscount(discount, price)}
          </p>

          <span className='leading-normal text-gray-800 font-medium text-md md:text-lg'>
            <span className='text-orange-600'>⭐</span>
            {rating.stars}
          </span>
        </DiscountInfo>

        <p className='leading-normal text-md xs:max-lg:text-md lg:text-lg pt-3 line-clamp-2 truncate'>
          {name}
        </p>
      </div>
    </div>
  )
}
