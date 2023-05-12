import type { CategorySortFilterProps } from 'additional'
import { SortBy } from 'enums'

export const CategoryRatingFilter: React.FC<CategorySortFilterProps> = ({ onChange, sortBy }) => {
  const productSortedHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const userInput = e.target.value as SortBy
    onChange(userInput)
  }

  return (
    <div className='flex items-center sm:w-full max-w-[240px]'>
      <label htmlFor='sort-products-by' className='text-gray-600 font-medium mr-2 sm:mr-4 whitespace-nowrap'>Sort By:</label>
      <select
        className='text-gray-600 bg-white border rounded-md p-1 w-full'
        name='sort-products-by'
        id='sort-products-by'
        value={sortBy}
        onChange={productSortedHandler}
      >
        <option value={SortBy.DATE}>Most recents</option>
        <option value={SortBy.RATING}>Most voted</option>
        <option value={SortBy.PRICE}>Cheapest</option>
      </select>
    </div>
  )
}
