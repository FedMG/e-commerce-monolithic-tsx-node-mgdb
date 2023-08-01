import { ProductsCard } from '@/modules/category/components/card'
import { isArrayOfObjects } from '@/utils'

import type { FC, ReactElement } from 'react'
import type { CategoryProps } from '../../schemas'

type CategoryProductsProps = Pick<CategoryProps, 'products'>

export const CategoryProducts: FC<CategoryProductsProps> = ({ products }): ReactElement => (
  <div className='pt-6 lg:pt-0 grid grid-cols-12 col-span-12 lg:col-span-8 gap-x-4 gap-y-6 md:gap-6'>
    {isArrayOfObjects(products) &&
      products.map(({ id, createdAt, ...rest }) => (
        <div key={id} className='col-span-12 min-[320px]:col-span-6 min-[500px]:col-span-4 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-4'>
          <ProductsCard element={{ id, ...rest }} className='max-h-[430px]' />
        </div>
      ))}
  </div>
)
