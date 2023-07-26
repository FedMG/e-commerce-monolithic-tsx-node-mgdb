import type { BaseComponentProps } from '@/schemas'
import type { CategoryProps } from '../../schemas'

type CategoryHeaderProps = Pick<BaseComponentProps, 'children'>

interface CategoryHeaderInfoProps {
  productsNumber: number
  currentCategory: CategoryProps['currentCategory']
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({ children }) => {
  return (
    <div className='sticky top-0 right-0 left-0 lg:relative col-span-12 p-2 lg:px-6 bg-gray-100 lg:shadow-sm border-y border-x lg:border rounded-t lg:rounded'>
      <div className='flex justify-between items-center'>
        {children}
      </div>
    </div>
  )
}

export const CategoryHeaderInfo: React.FC<CategoryHeaderInfoProps> = ({ productsNumber, currentCategory }) => {
  return (
    <p className='block sm:w-full text-md text-gray-700'>
      <strong>{productsNumber}{' '}</strong>results{' '}<span className='hidden sm:inline-block'>in{' '}<span className='capitalize font-bold'>{currentCategory}</span></span>
    </p>
  )
}
