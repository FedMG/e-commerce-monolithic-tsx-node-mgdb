import type { HeaderProps } from 'additional'

export const Header: React.FC<HeaderProps> = ({ children, labelledlby, className }) => {
  return (
    <header role='banner' aria-labelledby={labelledlby} className={className}>
      {children}
    </header>
  )
}
