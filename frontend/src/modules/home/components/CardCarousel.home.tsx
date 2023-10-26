import { useLoadingProduct } from '../hooks'
import { Carousel } from '@/components/carousel'
import { CardCarouselTitle } from './CardCarouselTitle.home'
import { StaggeringWrapper } from '@/components/StaggeringWrapper'
import { CardCarouselSkeleton } from './CardCarouselSkeleton.home'
import { ProductsCard } from '@/modules/category/components/card'

import type { BaseComponentProps } from '@/schemas'
import type { ProductCard } from '@/models'

// removed for performance of render server hosting 
// type CarouselProductCard = Omit<ProductCard, 'createdAt' | 'category'>
// const category = sanatize(section)
// const { items, isLoading } = useFetcher<FetchAllProductsParams, CarouselProductCard[]>({
//   fetcher: fetchAllProducts,
//   config: { category }
// })

export type CardCarouselProps = Pick<BaseComponentProps, 'children'> & {
  section: string
  data: ProductCard[] | []
}

const RANGE = Array(7).fill(undefined)

export const CardCarousel: React.FC<CardCarouselProps> = ({
  data = [],
  section,
  children
}): JSX.Element => {
  const isLoading = useLoadingProduct({ delay: 1100 })
  if (isLoading) {
    return (
      <div className='pt-4'>
        <CardCarouselTitle section={section}>{children}</CardCarouselTitle>
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
      <CardCarouselTitle section={section}>{children}</CardCarouselTitle>
      <Carousel className='items-center pb-4 pt-2'>
        {data.map(({ id, ...rest }, index) => (
          <StaggeringWrapper time={index} key={id}>
            <ProductsCard
              element={{ id, ...rest, category: section }}
              className='w-[150px] max-h-[230px] sm:w-[170px] sm:max-h-[260px] md:w-[190px] md:max-h-[290px] lg:w-[220px] lg:max-h-[330px]'
            />
          </StaggeringWrapper>
        ))}
      </Carousel>
    </div>
  )
}
