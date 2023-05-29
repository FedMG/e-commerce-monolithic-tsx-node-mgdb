import { getPriceWithDiscount, isNumber } from '@/utils'
import type { Product as ProductObject } from 'additional'

export const ProductDiscountPrice: React.FC<Pick<ProductObject, 'price' | 'discount'>> = ({ price, discount }) => {
  if (!isNumber(discount)) {
    return (
      <div className='py-2'>
        <div className='w-full relative'>
          <span className='text-gray-900 font-semibold text-lg md:text-2xl'>
            ${getPriceWithDiscount(discount, price)}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className='px-3 sm:px-4 py-2'>
      <div className='w-full relative'>
        <p className='-ml-2 text-gray-600 text-sm sm:text-md lg:text-lg font-medium'>
          <del>${price}</del>
        </p>
        <div className='flex w-full justify-content align-items'>
          <div className='flex gap-1 sm:gap-3'>
            <span className='text-gray-900 font-semibold text-lg md:text-2xl'>
              ${getPriceWithDiscount(discount, price)}
            </span>
            <span className='text-green-600 font-medium text-sm sm:text-md lg:text-lg'>
              -{discount}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
