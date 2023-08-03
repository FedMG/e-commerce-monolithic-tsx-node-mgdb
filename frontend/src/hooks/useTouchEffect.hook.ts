import { type ElementRef, useState } from 'react'
import type { CarouselEffect } from '@/schemas'
import type { AddVoidCallback } from '@/utilities'

type TouchEventParam = React.TouchEvent<ElementRef<'div'>>

type useTouchEffectResult = {
  start: AddVoidCallback<TouchEventParam>
  move: AddVoidCallback<TouchEventParam>
  end: AddVoidCallback<undefined>
}

export const useTouchEffect = ({ prev, next, ref }: CarouselEffect): useTouchEffectResult => {
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchMoveX, setTouchMoveX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const touchStartHandler = (e: TouchEventParam): void => {
    setTouchStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const touchMoveHandler = (e: TouchEventParam): void => {
    if (!isDragging) return
    setTouchMoveX(e.touches[0].clientX)
  }

  const touchEndHandler = (): void => {
    if (!isDragging) return
    setIsDragging(false)

    if (!ref.current) throw new Error('container reference was not provided. Check ref property')
    const container = ref.current

    const result = touchMoveX - touchStartX
    const swipeThreshold = container.offsetWidth * 0.25

    if (result > swipeThreshold) return prev()
    else if (result < -swipeThreshold) return next()
  }

  return { start: touchStartHandler, move: touchMoveHandler, end: touchEndHandler }
}
