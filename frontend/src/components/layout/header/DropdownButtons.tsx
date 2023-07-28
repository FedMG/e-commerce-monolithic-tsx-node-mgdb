import type { ButtonProps } from '@/schemas'
import type { AriaAttributes } from 'react'
import type { DropUndefined } from '@/utilities'

export interface HamburgerDropdownProps extends ButtonProps {
  ariaControls: DropUndefined<AriaAttributes, 'aria-controls'>
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

export interface DropdownButtonProps extends ButtonProps {
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
  ariaHaspopup: DropUndefined<AriaAttributes, 'aria-haspopup'>
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

export const HamburgerDropdownButton: React.FC<HamburgerDropdownProps> = ({ children, onClick, className, ariaControls, ariaExpanded }) => {
  return (
    <button onClick={onClick} type='button' className={className} aria-controls={ariaControls} aria-expanded={ariaExpanded}>
      {children}
    </button>
  )
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ children, onClick, className, ariaExpanded, ariaLabel, ariaHaspopup, labelledby }) => {
  return (
    <button onClick={onClick} type='button' className={className} aria-label={ariaLabel} aria-expanded={ariaExpanded} aria-haspopup={ariaHaspopup} aria-labelledby={labelledby}>
      {children}
    </button>
  )
}
