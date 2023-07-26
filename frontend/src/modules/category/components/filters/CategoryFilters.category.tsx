import type { BaseComponentProps } from '@/schemas'
import type { FC, ReactElement } from 'react'

type CategoryFiltersProp = Pick<BaseComponentProps, 'children'>

export const CategoryFilters: FC<CategoryFiltersProp> = ({ children }): ReactElement => (
  <div className='sticky top-0 left-0 right-0 lg:relative col-span-12 lg:col-span-4 border-b border-x lg:border lg:shadow bg-gray-100 rounded-b lg:rounded z-40'>
    <div className='flex lg:flex-col lg:gap-y-7 p-2 lg:p-0 lg:pb-8 lg:pl-6 lg:pr-4 text-gray-700 h-full xs:justify-between lg:justify-normal'>
      {children}
    </div>
  </div>
)
