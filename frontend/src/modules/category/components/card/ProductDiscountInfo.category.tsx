import type { FC, ReactElement } from 'react'

interface DiscountInfoProps {
  children: ReactElement[]
  discount?: number | null
  price: number
}

export const ProductCardDiscountInfo: FC<DiscountInfoProps> = ({ children, discount, price }): ReactElement | null => {
  if (children == null) return null

  if (discount === 0 || discount === undefined || discount === null) {
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
          <span className='pb-[0.3rem] pl-0.5 lg:pl-1 text-green-600 text-xs lg:text-sm font-medium'>
            {' '}
            -{discount}% OFF
          </span>
        </div>
        {children[1]}
      </div>
    </div>
  )
}
