import type { AccessibleSectionType, NextSectionType, SectionProps } from 'additional'

export const Section: NextSectionType<SectionProps> = ({ children, className, labelledby, describedby }) => (
  <section className={className} aria-labelledby={labelledby} aria-describedby={describedby}>{children}</section>
)

const SectionAccessible: AccessibleSectionType = ({ children, className, labelledby, role, id }) => (
  <section id={id} className={className} role={role} aria-labelledby={labelledby}>{children}</section>
)
SectionAccessible.displayName = 'Section.Accessible'
Section.Accessible = SectionAccessible
