import { SVGElement, PathElement, TitleElement } from '@/components/svgElements'
import { isValidNumber } from '@/utils'

import type { ReactElement, FC } from 'react'

const MAX_STARS_LENGTH = 5

export const ProductRating: FC<{ num: number }> = ({ num }): ReactElement | null => {
  if (!isValidNumber(num)) return null
  const ratingNum = Math.round(num)

  const setFilledStars = (_: number, index: number): ReactElement => (
    <SVGElement key={index} ariaHidden className='w-5 h-5 lg:w-6 lg:h-6 fill-yellow-400 hover:fill-yellow-300'>
      <TitleElement title={`Star ${index + 1}`} srOnly />
      <PathElement d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
    </SVGElement>
  )

  const setUnfilledStars = (_: number, index: number): ReactElement => (
    <SVGElement key={ratingNum + index} ariaHidden className='w-5 h-5 lg:w-6 lg:h-6 fill-gray-300 transform hover:rotate-6'>
      <TitleElement title={`Unfilled star ${ratingNum + index + 1}`} srOnly />
      <PathElement d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
    </SVGElement>
  )

  return (
    <div className='flex items-center'>
      {Array(ratingNum).fill(0).map(setFilledStars).concat([...Array(MAX_STARS_LENGTH - ratingNum)].map(setUnfilledStars))}
    </div>
  )
}
