import type { ProductSectionProps } from 'additional'
import { Section } from './Section'

export const ProductSection: React.FC<ProductSectionProps> = ({ children, id }) => (
  <Section.Accessible id={id} role='region' className='grid grid-cols-2 lg:grid-cols-5 gap-1 gap-y-4 sm:gap-4'>
    {children}
  </Section.Accessible>
)
