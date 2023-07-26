import { useSearchFilter } from '../../hooks/'
import type { CategoryNextFilterProps } from '../../schemas'

type CategorySearchFilterProps = CategoryNextFilterProps

export const CategorySearchFilter: React.FC<CategorySearchFilterProps> = ({ onChange, currentCategory }) => {
  const { productSearch, productSearchHandler } = useSearchFilter({ onChange, currentCategory })
  return (
    <div className='lg:my-4 flex lg:block items-center w-full lg:w-auto'>
      {/* later add feature of filter badges that were added */}
      <div className='lg:pt-3 flex lg:block items-center w-full gap-2 lg:gap-0'>
        <label htmlFor='product-search' className='text-gray-700 font-medium'>
          Search
        </label>
        <input
          className='mr-2 p-1  lg:py-2 lg:px-1 lg:mr-0 border rounded-md w-full'
          id='product-search'
          value={productSearch}
          onChange={productSearchHandler}
        />
      </div>
    </div>
  )
}
