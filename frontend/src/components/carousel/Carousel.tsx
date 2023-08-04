import { useCardCarouselEffect, useTouchEffect } from '@/hooks'
import { CarouselButton } from './CarouselButton'
import { LeftArrowIcon, RightArrowIcon } from '@/assets'

import type { BaseComponentProps } from '@/schemas'

const defaultBtnIcons = {
  left: (
    <LeftArrowIcon className='group-hover/left:border group-hover/left:shadow-sm rounded-md w-8 h-8 p-1 stroke-6 group-active/left:bg-gray-300 fill-gray-800 group-hover/left:fill-gray-600 group-active/left:fill-white' />
  ),
  right: (
    <RightArrowIcon className='group-hover/right:border group-hover/right:shadow-sm rounded-md w-8 h-8 p-1 stroke-6 group-active/right:bg-gray-300 fill-gray-800 group-hover/right:fill-gray-600 group-active/right:fill-white' />
  )
}

interface CarouselProps extends BaseComponentProps {
  btnIcons?: typeof defaultBtnIcons
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  btnIcons = defaultBtnIcons
}) => {
  const { prev, next, ref } = useCardCarouselEffect()
  const { start, move, end } = useTouchEffect({ prev, next, ref })

  return (
    <div className='group relative px-2 py-1'>
      <div className='max-w-full h-[250px] sm:h-[290px] md:h-[320px] lg:h-[370px] w-full m-auto select-none relative block overflow-hidden'>
        <div
          className={`gap-2 sm:gap-4 ${className} h-full flex flex-nowrap`}
          ref={ref}
          onTouchStart={start}
          onTouchMove={move}
          onTouchEnd={end}>
          {children}
        </div>
      </div>

      <CarouselButton onClick={prev} className='-left-8' ariaLabel='Slide item to the left'>
        {btnIcons.left}
      </CarouselButton>
      <CarouselButton onClick={next} className='-right-8' ariaLabel='Slide item to the right'>
        {btnIcons.right}
      </CarouselButton>
    </div>
  )
}
