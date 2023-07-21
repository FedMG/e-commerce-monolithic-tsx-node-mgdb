import { Section } from '@/components/templates'
import { ProductHeader, ProductTitle } from '../figure'
import { ProductDiscountPrice } from './Discount.product'
import { Heart } from '@/components'

import type { BaseComponentProps } from '@/schemas'
import type { Product } from 'additional'

type ProductInfoProps = Pick<Product, 'name' | 'price' | 'rating' | 'discount'> & BaseComponentProps

const SEP = 'p-4 sm:p-3 md:p-6'
const GAP = 'gap-1'

export const ProductInfo: React.FC<ProductInfoProps> = ({ children, className, name, price, rating, discount }): React.ReactElement => (
  <Section.Accessible labelledby='product-form-section' className={`${className} ${SEP} col-span-2 sm:col-span-1 lg:col-span-2 relative flex flex-col ${GAP}`}>
    <ProductHeader rating={rating} className='hidden sm:block'>
      <ProductTitle className='text-gray-900'>{name}</ProductTitle>
      <Heart />
    </ProductHeader>
    <Heart className='absolute top-6 right-4 w-9 h-9 sm:hidden z-10' />
    <ProductDiscountPrice price={price} discount={discount} />
    {children}
  </Section.Accessible>
)
