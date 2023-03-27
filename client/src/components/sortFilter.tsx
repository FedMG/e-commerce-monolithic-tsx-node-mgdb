import type { CategorySortFilterProps } from "additional";
import { SortBy } from "enums";

export const CategoryRatingFilter: React.FC<CategorySortFilterProps> = ({ onChange, sortBy }) => {  
  const productSortedHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const userInput = e.target.value as SortBy
    onChange(userInput)
  }

  return (
    <div className="flex items-center w-full">
        <label htmlFor="sort-products-by" className="mr-4 whitespace-nowrap">Sort By:</label>
          <select
          className="border border-gray-400 rounded p-1 w-full"
            name="sort-products-by"
            id="sort-products-by"
            value={sortBy}
            onChange={productSortedHandler}
          >
        <option value={SortBy.DATE}>Date</option>
        <option value={SortBy.RATING}>Rating</option>
      </select>
    </div>
  );
}
