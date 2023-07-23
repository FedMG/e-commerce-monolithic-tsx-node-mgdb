import { useDiscountFilter } from '../../hooks'
import { isArrayOfPrimitives } from '@/utils'
import type { CategoryNextFilterProps } from '../../schemas'

interface CategoryDiscountsFilterProps extends CategoryNextFilterProps {
  discounts: number[]
}

export const CategoryDiscountFilter: React.FC<CategoryDiscountsFilterProps> = ({ onChange, discounts, currentCategory }) => {
  const { handleSelectedOptions, selecteds } = useDiscountFilter({ onChange, currentCategory })
  return (
    <div className='flex flex-col'>
      <span className='text-gray-700 font-semibold mb-2'>Discounts</span>
      {isArrayOfPrimitives(discounts) && discounts.map((discount, id) => (
        <div key={id} className='flex align-center'>
          <input type='checkbox' id={`${discount}`} name='discount' value={discount} onChange={(e) => handleSelectedOptions(discount, e.target.checked)} className='mr-3' checked={selecteds.has(discount)} />
          <label htmlFor={`${discount}`} className='text-gray-700'>-{discount} Off</label>
        </div>
      ))}
    </div>
  )
}
