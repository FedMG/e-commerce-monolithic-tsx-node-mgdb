import { StarIcon } from '@/components/SVGIcons'
import { Text } from '@/components/Text'
import { isValidNumber } from '@/utils'

import type { BaseComponentProps } from '@/schemas'
import type { ReactElement, FC } from 'react'

type StarsRange = 1 | 2 | 3 | 4 | 5

export interface ProductRatingProps {
  stars: StarsRange
  votes: number
}

const STARS_RANGE: StarsRange[] = [1, 2, 3, 4, 5]
const DEFAULT_RATING = 0

const addStars = (rating: number): JSX.Element[] => {
  return STARS_RANGE.map((star: StarsRange) => {
    if (rating >= star) return <StarIcon key={star} className='fill-yellow-400 hover:fill-yellow-300' />
    return <StarIcon key={star} className='fill-gray-300 transform hover:rotate-6' />
  })
}

export const ProductRating: FC<ProductRatingProps> = ({ stars, votes }): ReactElement | null => {
  if (!isValidNumber(stars)) return <div className='flex items-center' aria-disabled>{addStars(DEFAULT_RATING)}</div>
  const rating = Math.round(stars)

  return (
    <div className='flex items-center' aria-label={`Rating: ${rating} out of 5 stars`} aria-valuemin={0} aria-valuemax={5} aria-valuenow={rating}>
      {addStars(rating)}
      <Text className='pl-2 text-sm md:text-md font-medium text-gray-600 hover:text-primary-700'>({votes} votes)</Text>
    </div>
  )
}
