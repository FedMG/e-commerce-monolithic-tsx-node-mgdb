import type { AriaAttributes } from 'react'
import type { DropUndefined } from '@/utilities'

interface NavigationProps {
  children: React.ReactNode
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
  className: string
}

export const Navigation: React.FC<NavigationProps> = ({ children, ariaLabel, className }) => (
  <nav role='navigation' aria-label={ariaLabel} className={className}>
    {children}
  </nav>
)
