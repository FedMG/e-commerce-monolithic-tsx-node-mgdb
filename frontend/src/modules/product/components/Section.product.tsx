import { Section } from '@/components/Section'
import type { BaseComponentProps } from '@/schemas'

interface ProductSectionProps extends Pick<BaseComponentProps, 'children'> {
  id: string
}

export const ProductSection: React.FC<ProductSectionProps> = ({ children, id }) => (
  <Section.Accessible id={id} role='region' className='grid grid-cols-2 lg:grid-cols-5 gap-1 gap-y-4 sm:gap-4'>
    {children}
  </Section.Accessible>
)
