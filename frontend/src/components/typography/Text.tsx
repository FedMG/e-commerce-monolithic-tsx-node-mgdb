import { AriaAttributes, FC, ReactNode } from 'react'
import { AddDisplayName, DropUndefinedUnion } from '@/utilities'

export type ASElement = keyof JSX.IntrinsicElements

export interface TextProps {
  as?: ASElement
  children: ReactNode
  className: string
}

type GradientTextProps = Record<'from' | 'via' | 'to', string> & {
  children: ReactNode
}

interface AccessibleTextProps extends TextProps {
  id: string
}

interface StateTextTypeProps extends TextProps {
  id: string
  ariaLive: DropUndefinedUnion<AriaAttributes['aria-live']>
}

type GradientTextType = AddDisplayName<
  ({ from, via, to, children }: GradientTextProps) => JSX.Element
>
type AccessibleTextType = AddDisplayName<({ ...Params }: AccessibleTextProps) => JSX.Element>
type StateTextType = AddDisplayName<({ ...Params }: StateTextTypeProps) => JSX.Element>

interface NextTextType<T> extends FC<T> {
  Gradient: GradientTextType
  Accessible: AccessibleTextType
  State: StateTextType
}

export const Text: NextTextType<TextProps> = ({ className, as: Element = 'span', children }) => {
  return <Element className={className}>{children}</Element>
}

const TextGradient: GradientTextType = ({
  from = 'from-white',
  via = '',
  to = 'to-black',
  children
}) => {
  return (
    <span className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text`}>
      {children}
    </span>
  )
}
TextGradient.displayName = 'Text.Gradient'
Text.Gradient = TextGradient

const TextAccessible: AccessibleTextType = ({ id, className, as: Element = 'span', children }) => {
  return (
    <Element id={id} className={className}>
      {children}
    </Element>
  )
}
TextAccessible.displayName = 'Text.Accessible'
Text.Accessible = TextAccessible

const TextState: StateTextType = ({ id, ariaLive, className, as: Element = 'span', children }) => {
  return (
    <Element aria-live={ariaLive} id={id} className={className}>
      {children}
    </Element>
  )
}
TextState.displayName = 'Text.State'
Text.State = TextState
