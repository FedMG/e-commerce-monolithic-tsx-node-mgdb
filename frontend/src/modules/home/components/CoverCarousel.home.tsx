import { useLoading } from '@/hooks'

import { CoverCarouselSkeleton } from './CoverCarouselSkeleton.home'
import { CoverImage } from './CoverImage.home'
import { TrackedCarousel } from '@/components'
import { withTrackerPosition } from '@/hocs'
import { CoverInstances } from './covers'

import { SquareIcon as IconComponent } from '@/assets'
import type { Cover } from '@/models'

const positionColor = {
  default:
    'text-transparent fill-neutral-200 hover:text-neutral-900 hover:fill-neutral-900 drop-shadow-black',
  active: 'text-black fill-black drop-shadow-white'
}

interface CoverCarouselProps {
  items: Cover[]
}

export const CoverCarousel: React.FC<CoverCarouselProps> = ({ items }): JSX.Element => {
  const isLoading = useLoading({ items })
  if (isLoading) return <CoverCarouselSkeleton />

  const carouselLength = items.length - 1
  const SquareIconsWihTrackerPosition = withTrackerPosition({
    IconComponent,
    carouselLength,
    positionColor
  })

  return (
    <TrackedCarousel className='md:h-[340px]' ItemsTracker={SquareIconsWihTrackerPosition}>
      {items.map(({ image, id, alt, ...rest }, index) => (
        <div key={id} className='relative min-w-full'>
          <CoverImage src={image.src} alt={alt} />
          {CoverInstances[index](rest)}
        </div>
      ))}
    </TrackedCarousel>
  )
}
