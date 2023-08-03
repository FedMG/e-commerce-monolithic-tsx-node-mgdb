import Link from 'next/link'

import { Text } from '@/components'
import { NavigateArrowIcon } from '@/assets'
import { CardCarouselProps } from './CardCarousel.home'
import type { ElementRef } from 'react'

const handleClick = (e: React.MouseEvent<ElementRef<'div'>>) => e.preventDefault()

export const CardCarouselTitle: React.FC<CardCarouselProps> = ({ children, section: category }) => (
  <Link
    className='mx-2 px-4 bg-gray-100 rounded-t-lg shadow-sm border py-1 flex justify-between align-items group/category'
    href='/[category]'
    as={`/${category}`}>
    <Text.Accessible
      as='h2'
      id={`home-label-${category}`}
      className='text-gray-800 text-md md:text-lg lg:text-xl font-semibold group-active/category:text-gray-800 group-hover/category:text-primary-700 w-full max-w-fit'>
      {children}
    </Text.Accessible>
    <div className='w-full group-hover/category:cursor-default' onClick={handleClick} />
    <NavigateArrowIcon className='group-active/category:stroke-gray-800  group-hover/category:stroke-primary-700 w-full max-w-fit' />
  </Link>
)
