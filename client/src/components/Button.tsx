import type { DropdownButtonProps, HamburgerDropdownProps } from 'additional'

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
