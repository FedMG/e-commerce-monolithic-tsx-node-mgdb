import { useEffect, useState } from 'react'

import { isArrayOfPrimitives, setUpperCase } from '@/utils'
import { Product } from 'additional'

// later refactor
type FilterFunction = ((product: Product) => boolean)

interface CategoryProps {
  products: Product[]
  discounts: number[]
  brands: string[]
  currentCategory: string
}

interface CategoryNextFilterProps {
  onChange: (filter: FilterFunction | null) => void
  currentCategory: CategoryProps['currentCategory']
}

interface CategoryBrandsFilterProps extends CategoryNextFilterProps {
  brands: string[]
}

export const CategoryBrandFilter: React.FC<CategoryBrandsFilterProps> = ({ brands, onChange, currentCategory }): React.ReactElement => {
  const [selecteds, setSelected] = useState<Set<string>>(() => new Set())

  const handleChange = (brandName: string, isChecked: boolean): void => {
    const selectedBrands = structuredClone(selecteds)

    if (isChecked) {
      selectedBrands.add(brandName)
    } else {
      selectedBrands.delete(brandName)
    }

    if (selectedBrands.size > 0) {
      onChange(product => selectedBrands.has(product.brand))
      setSelected(selectedBrands)
      return undefined
    }
    onChange(null)
    setSelected(selectedBrands)
  }

  useEffect(() => {
    setSelected(() => new Set())
  }, [currentCategory])

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
