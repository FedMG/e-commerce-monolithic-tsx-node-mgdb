import { useRef, useEffect, useState, useCallback } from 'react'
import { nextControl, previousControl } from '@/hooks'

import type { CarouselEffect, CarouselItemsResult, CarouselReference } from '@/schemas'

const SLIDE_INTERVAL = 6000

interface CarouselEffectResult extends CarouselEffect {
  position: number
}

export const useCarouselEffect = (): CarouselEffectResult => {
  const carousel = useRef<CarouselReference>(null)
  const [itemPosition, setItemPosition] = useState(0)

  const carouselItems = (): CarouselItemsResult => {
    if (carousel.current == null) throw new Error('Carousel reference was not provided. Check ref property')
    return ({
      items: carousel.current.children,
      container: carousel.current
    })
  }

  const prevItemHandler = (): void => {
    const { items } = carouselItems()
    const isFirstPosition = itemPosition === 0
    const newPosition = isFirstPosition ? items.length - 1 : itemPosition - 1

    setItemPosition(newPosition)
    previousControl(carouselItems)
  }

  const nextItemHadler = useCallback(() => {
    const { items } = carouselItems()
    const isLastPosition = itemPosition === items.length - 1
    const newPosition = isLastPosition ? 0 : itemPosition + 1

    setItemPosition(newPosition)
    nextControl(carouselItems)
  }, [itemPosition])

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextItemHadler()
    }, SLIDE_INTERVAL)

    return () => clearInterval(autoplay)
  }, [itemPosition, nextItemHadler])

  return { prev: prevItemHandler, next: nextItemHadler, ref: carousel, position: itemPosition }
}
