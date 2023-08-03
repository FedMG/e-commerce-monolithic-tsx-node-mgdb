import type { AriaAttributes, ElementRef, MutableRefObject, ReactNode } from 'react'
import type { AddVoidCallback, DropUndefined } from '@/utilities'

export interface BaseComponentProps {
  children: ReactNode
  className: string
}

export interface CallbackEvents {
  onClick: () => void
  onMouseDown: () => void
  onMouseUpLeave: () => void
}

export interface ButtonProps {
  children: ReactNode
  onClick: () => void
  className: string
  ariaExpanded: DropUndefined<AriaAttributes, 'aria-expanded'>
}

export type CarouselReference = ElementRef<'div'> | null
export interface CarouselEffect {
  next: AddVoidCallback<undefined>
  prev: AddVoidCallback<undefined>
  ref: MutableRefObject<CarouselReference>
}

export interface CarouselItemsResult {
  items: HTMLCollection
  container: HTMLDivElement
}