import Link from 'next/link'

import type { AriaAttributes } from 'react'
import type { DropUndefined } from '@/utilities'

export interface LinkButtonProps {
  children: React.ReactNode
  href: string
  className: string
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export interface LinkEventButtonProps extends LinkButtonProps {
  onClick: () => void
}

export const LinkButton: React.FC<LinkButtonProps> = ({ children, href, className, ariaLabel }) => {
  return (
    <Link href={href} className={className} role='button' aria-label={ariaLabel}>
      {children}
    </Link>
  )
}

export const LinkEventButton: React.FC<LinkEventButtonProps> = ({ children, href, className, ariaLabel, onClick }) => {
  return (
    <Link href={href} className={className} role='button' aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  )
}
