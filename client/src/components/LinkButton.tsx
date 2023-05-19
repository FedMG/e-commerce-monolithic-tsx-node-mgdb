import Link from 'next/link'
import type { LinkButtonProps, LinkEventButtonProps } from 'additional'

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
