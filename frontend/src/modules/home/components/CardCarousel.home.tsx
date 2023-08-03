import { useFetcher } from '@/hooks'
import { FetchAllProductsParams, fetchAllProducts } from '@/services'

import { Carousel } from '@/components/carousel'
import { CardCarouselTitle } from './CardCarouselTitle.home'
import { CardCarouselSkeleton } from './CardCarouselSkeleton.home'
import { ProductsCard } from '@/modules/category/components/card'
import { sanatize } from '@/utils'

import type { BaseComponentProps } from '@/schemas'
import type { ProductCard } from '@/models'
import { StaggeringWrapper } from '@/components/StaggeringWrapper'

type CarouselProductCard = Omit<ProductCard, 'createdAt' | 'category'>
export type CardCarouselProps = Pick<BaseComponentProps, 'children'> & {
  section: string
}

const RANGE = Array(7).fill(undefined)

export const CardCarousel: React.FC<CardCarouselProps> = ({ section, children }): JSX.Element => {
  const category = sanatize(section)
  const { items, isLoading } = useFetcher<FetchAllProductsParams, CarouselProductCard[]>({
    fetcher: fetchAllProducts,
    config: { category }
  })

  if (isLoading) {
    return (
      <div className='pt-4'>
        <CardCarouselTitle section={category}>{children}</CardCarouselTitle>
        <Carousel className='pb-4 pt-2'>
          {RANGE.map((_, id) => (
            <StaggeringWrapper time={id} key={id}>
              <CardCarouselSkeleton className='w-[150px] max-h-[230px] sm:w-[170px] sm:max-h-[260px] md:w-[190px] md:max-h-[290px] lg:w-[212px] lg:max-h-[330px]' />
            </StaggeringWrapper>
          ))}
        </Carousel>
      </div>
    )
  }

  return (
    <div className='pt-4'>
      <CardCarouselTitle section={category}>{children}</CardCarouselTitle>
      <Carousel className='items-center pb-4 pt-2'>
        {items.map(({ id, ...rest }, index) => (
          <StaggeringWrapper time={index} key={id}>
            <ProductsCard
              element={{ id, ...rest, category }}
              className='w-[150px] max-h-[230px] sm:w-[170px] sm:max-h-[260px] md:w-[190px] md:max-h-[290px] lg:w-[220px] lg:max-h-[330px]'
            />
          </StaggeringWrapper>
        ))}
      </Carousel>
    </div>
  )
}
