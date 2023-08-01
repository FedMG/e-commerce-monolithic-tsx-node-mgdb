import { useRef, useCallback, MutableRefObject, ElementRef } from 'react'
import { nextControl, previousControl } from './carouselControls'
import type { AddVoidCallback } from '@/utilities'

type CarouselReference = ElementRef<'div'> | null

interface CarouselEffectResult {
  next: AddVoidCallback<undefined>
  prev: AddVoidCallback<undefined>
  ref: MutableRefObject<CarouselReference>
}

export interface CarouselItemsResult {
  items: HTMLCollection
  container: HTMLDivElement
}

export const useCardCarouselEffect = (): CarouselEffectResult => {
  const carousel = useRef<CarouselReference>(null)

  const carouselItems = (): CarouselItemsResult => {
    if (carousel.current == null) throw new Error('Carousel reference was not provided. Check ref property')
    return ({
      items: carousel.current.children,
      container: carousel.current
    })
  }
  const prevItemHandler = (): void => previousControl(carouselItems)
  const nextItemHadler = useCallback(() => nextControl(carouselItems), [])

  return { prev: prevItemHandler, next: nextItemHadler, ref: carousel }
}
