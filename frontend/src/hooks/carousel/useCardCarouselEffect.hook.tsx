import { useRef } from 'react'
import { nextControl, previousControl } from './carouselControls'
import type { CarouselEffect, CarouselItemsResult, CarouselReference } from '@/schemas'

export const useCardCarouselEffect = (): CarouselEffect => {
  const carousel = useRef<CarouselReference>(null)

  const carouselItems = (): CarouselItemsResult => {
    if (carousel.current == null) throw new Error('Carousel reference was not provided. Check ref property')
    return ({
      items: carousel.current.children,
      container: carousel.current
    })
  }

  const prevItemHandler = (): void => previousControl(carouselItems)
  const nextItemHadler = (): void => nextControl(carouselItems)

  return { prev: prevItemHandler, next: nextItemHadler, ref: carousel }
}
