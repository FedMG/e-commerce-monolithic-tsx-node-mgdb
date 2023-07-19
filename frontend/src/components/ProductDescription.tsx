import { Section } from './Section'
import { Text } from './Text'

import type { ProductDescriptionProps, ProductParagraphLabelProps, ProductParagraphProps } from 'additional'

export const ProductParagraph: React.FC<ProductParagraphProps> = ({ description, className }) => (
  <Text.Accessible as='p' id='product-description' className={`${className} space-y-5`}>
    <Text className='block'>
      {description?.introduction}
    </Text>
    <Text className='block'>
      {description?.body}
    </Text>
    <Text className='block'>
      {description?.conclusion}
    </Text>
  </Text.Accessible>
)

export const ProductParagraphLabel: React.FC<ProductParagraphLabelProps> = ({ children, className }) => (
  <Text.Accessible as='h2' id='product-label-description' className={`${className} my-3`}>{children}</Text.Accessible>
)

export const ProductDescription: React.FC<ProductDescriptionProps> = ({ children, className }) => (
  <Section labelledby='product-label-description' describedby='product-description' className={`${className} p-4 col-span-2 sm:max-lg:col-span-2 lg:col-span-3 flex flex-col justify-center items-center`}>
    <div className='max-w-[75ch]'>
      {children}
    </div>
  </Section>
)
