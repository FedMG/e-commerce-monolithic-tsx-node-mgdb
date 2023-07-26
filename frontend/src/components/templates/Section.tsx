import type { BaseComponentProps } from '@/schemas'
import type { AriaAttributes, AriaRole } from 'react'
import type { AddDisplayName, DropUndefined } from '@/utilities'

type AccessibleSectionProps = BaseComponentProps & {
  labelledby?: AriaAttributes['aria-labelledby']
  role?: AriaRole
  id?: string
}
interface NextSectionType<T> extends React.FC<T> {
  Accessible: AccessibleSectionType
}

type AccessibleSectionType = AddDisplayName<({ ...Params }: AccessibleSectionProps) => React.ReactElement>

type SectionProps = BaseComponentProps & {
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
  describedby: DropUndefined<AriaAttributes, 'aria-describedby'>
}

export const Section: NextSectionType<SectionProps> = ({ children, className, labelledby, describedby }) => (
  <section className={className} aria-labelledby={labelledby} aria-describedby={describedby}>{children}</section>
)

const SectionAccessible: AccessibleSectionType = ({ children, className, labelledby, role, id }) => (
  <section id={id} className={className} role={role} aria-labelledby={labelledby}>{children}</section>
)
SectionAccessible.displayName = 'Section.Accessible'
Section.Accessible = SectionAccessible
