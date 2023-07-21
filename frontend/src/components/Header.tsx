import type { AriaAttributes } from "react"
import type { DropUndefined } from "utilities"

export interface HeaderProps {
  children: React.ReactNode
  labelledlby: DropUndefined<AriaAttributes, 'aria-labelledby'>
  className: string
}

export const Header: React.FC<HeaderProps> = ({ children, labelledlby, className }) => {
  return (
    <header role='banner' aria-labelledby={labelledlby} className={className}>
      {children}
    </header>
  )
}
