import type { AriaAttributes, FC, ReactElement, ReactNode } from 'react'
import type { AddDisplayName, DropUndefined } from 'utilities'

interface PathProps { d: string }
interface TitleProps { title: string }

type PathSVGType = AddDisplayName<({ d }: PathProps) => ReactElement>
type WithSVGEventType = AddDisplayName<({ ...Params }: SVGWithEventProps) => ReactElement>
type TitleSVGType = AddDisplayName<({ title }: TitleProps) => ReactElement>

interface NextSVGType<T> extends FC<T> {
  Path: PathSVGType
  WithEvent: WithSVGEventType
  Title: TitleSVGType
}

interface SVGElementProps {
  children: ReactNode
  role: string
  className: string
  ariaHidden: DropUndefined<AriaAttributes, 'aria-hidden'>
  viewBox: string
  labelledby: string // check
}

interface SVGWithEventProps {
  children: ReactNode
  onClick: () => void
  className: string
  role: string
  viewBox: string
}

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
