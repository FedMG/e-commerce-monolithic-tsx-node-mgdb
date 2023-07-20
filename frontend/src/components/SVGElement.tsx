import type { NextSVGType, SVGElementProps, PathSVGType, TitleSVGType, WithSVGEventType } from 'additional'

export const SVGElement: NextSVGType<SVGElementProps> = ({ children, className, ariaHidden, role, viewBox, labelledby }) => (
  <svg
    role={role}
    className={className}
    aria-hidden={ariaHidden}
    aria-labelledby={labelledby}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
  >{children}
  </svg>
)

const SVGWithEvent: WithSVGEventType = ({ children, onClick, className, role, viewBox }) => (
  <svg
    role={role}
    onClick={onClick}
    className={className}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
  >
    {children}
  </svg>
)
SVGWithEvent.displayName = 'SVGElement.WithEvent'
SVGElement.WithEvent = SVGWithEvent

const SVGPath: PathSVGType = ({ d }) => (
  <path
    d={d}
    strokeLinecap='round'
    strokeLinejoin='round'
    fillRule='evenodd'
    clipRule='evenodd'
  />
)
SVGPath.displayName = 'SVGElement.Path'
SVGElement.Path = SVGPath

const SVGTitle: TitleSVGType = ({ title }) => <title>{title}</title>
SVGTitle.displayName = 'SVGElement.Title'
SVGElement.Title = SVGTitle
