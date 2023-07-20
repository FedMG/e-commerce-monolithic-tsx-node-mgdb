import { Section } from '@/components/Section'
import type { BaseComponentProps } from '@/schemas'

interface ProductFigureProps extends BaseComponentProps {}

export const ProductFigure: React.FC<ProductFigureProps> = ({ children, className }): React.ReactElement => (
  <Section.Accessible labelledby='product-image-title' className={`${className} px-4 pt-1 sm:p-0 col-span-2 sm:col-span-1 lg:col-span-3`}>
    {children}
  </Section.Accessible>
)
