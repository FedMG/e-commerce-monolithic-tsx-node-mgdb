import type { AriaAttributes, ReactNode } from 'react'
import type { DropUndefined } from '@/utilities'

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
