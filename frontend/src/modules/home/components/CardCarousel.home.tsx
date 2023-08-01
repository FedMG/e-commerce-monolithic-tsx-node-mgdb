import Link from 'next/link'
import { useFetcher } from '@/hooks'
import { fetchAllProducts } from '@/services'

import { ProductsCard } from '@/modules/category/components/card'
import { Carousel } from '@/components/carousel'
import { Text } from '@/components'
import { sanatize } from '@/utils'
import { NavigateArrowIcon } from '@/assets'

import type { ProductCard } from '@/models'
import type { BaseComponentProps } from '@/schemas'
import type { ElementRef } from 'react'

type CarouselProductCard = Omit<ProductCard, 'createdAt' | 'category'>
type CardCarouselProps = Pick<BaseComponentProps, 'children'> & {
  section: string
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  section,
  children,
}): JSX.Element => {
  const category = sanatize(section)
  const products = useFetcher<CarouselProductCard[]>({
    fetcher: fetchAllProducts,
    config: { category }
  })
  const handleClick = (e: React.MouseEvent<ElementRef<'div'>>) => e.preventDefault()

  return (
    <div className='pt-4'>
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

      <Carousel className='items-center'>
        {products.map(({ id, ...rest }) => (
          <ProductsCard
            key={id}
            element={{ id, ...rest, category }}
            className='w-[150px] max-h-[230px] sm:w-[170px] sm:max-h-[260px] md:w-[190px] md:max-h-[290px] lg:w-[220px] lg:max-h-[330px]'
          />
        ))}
      </Carousel>
    </div>
  )
}
