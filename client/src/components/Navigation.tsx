import type { NavigationProps } from 'additional'

export const Navigation: React.FC<NavigationProps> = ({ children, ariaLabel, className }) => (
  <nav role='navigation' aria-label={ariaLabel} className={className}>
    {children}
  </nav>
)
