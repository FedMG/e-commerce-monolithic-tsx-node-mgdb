import { useBrandFilter } from '@/modules/category/hooks'
import { isArrayOfPrimitives, setUpperCase } from '@/utils'
import type { CategoryNextFilterProps } from '../../schemas'
import type { Brands } from '@/models'

interface CategoryBrandsFilterProps extends CategoryNextFilterProps {
  brands: Brands[]
}

export const CategoryBrandFilter: React.FC<CategoryBrandsFilterProps> = ({ brands, onChange, currentCategory }): React.ReactElement => {
  const { handleChange, selecteds } = useBrandFilter({ onChange, currentCategory })

  return (
    <div className='flex flex-col'>
      <span className='text-gray-700 font-semibold mb-2'>Brands</span>
      {isArrayOfPrimitives(brands) && brands.map((name) => (
        <div key={name} className='flex align-center'>
          <input type='checkbox' id={name} name='brand' value={name} onChange={(e) => handleChange(name, e.target.checked)} className='mr-3' checked={selecteds.has(name)} />
          <label htmlFor={name} className='text-gray-700'>{setUpperCase(name)}</label>
        </div>
      ))}
    </div>
  )
}
