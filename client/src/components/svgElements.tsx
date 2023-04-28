import type { SVGElementProps, PathElementProps, TitleElementProps } from 'additional'

export const SVGElement: React.FC<SVGElementProps> = ({ children, className, ariaHidden, role, onClick, strokeCurrent, fillCurrent, vBox = 20 }) => {
  return (
    <svg
      role={role}
      onClick={onClick}
      className={className}
      aria-hidden={ariaHidden}
      fill={fillCurrent && 'currentColor'}
      stroke={strokeCurrent && 'currentColor'}
      viewBox={`0 0 ${vBox} ${vBox}`}
      xmlns='http://www.w3.org/2000/svg'
    >{children}
    </svg>
  )
}

export const PathElement: React.FC<PathElementProps> = ({ d }) => (
  <path
    d={d}
    strokeLinecap="round"
    strokeLinejoin="round"
    fillRule='evenodd'
    clipRule='evenodd'
  />
)

export const TitleElement: React.FC<TitleElementProps> = ({ srOnly, title }) => (
  <title className={srOnly === true ? 'sr-only': ''}>{title}</title>
)
