import { CoverImage } from '@/modules/home'
import { TrackedCarousel } from '@/components/carousel'
import { withTrackerPosition } from '@/hocs'

import { SquareIcon as IconComponent } from '@/assets'
import type { Cover } from '@/models'

const positionColor = {
  default: 'text-gray-900 fill-gray-900 hover:text-gray-800 hover:fill-gray-800',
  active: 'text-white fill-white'
}

interface CoverCarouselProps {
  items: Cover[]
}

export const CoverCarousel: React.FC<CoverCarouselProps> = ({ items }): JSX.Element => {
  const carouselLength = items.length - 1
  const SquareIconsWihTrackerPosition = withTrackerPosition({
    IconComponent,
    carouselLength,
    positionColor
  })

  return (
    <TrackedCarousel className='h-[340px]' ItemsTracker={SquareIconsWihTrackerPosition}>
      {items.map(({ image, id, alt, brand, category, discount }) => (
        <CoverImage key={id} src={image.src} alt={alt} />
      ))}
    </TrackedCarousel>
  )
}