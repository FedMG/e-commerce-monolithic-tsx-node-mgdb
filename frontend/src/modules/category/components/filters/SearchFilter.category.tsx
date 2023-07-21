import { useEffect, useState } from 'react'
import type { Product } from 'additional'

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

type CategorySearchFilterProps = CategoryNextFilterProps

export const CategorySearchFilter: React.FC<CategorySearchFilterProps> = ({ onChange, currentCategory }) => {
  const [productSearch, setSearch] = useState('')

  const productSearchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const userInput = e.target.value
    setSearch(userInput)

    onChange((product) => {
      const productName = product.name.toLowerCase()
      return productName.includes(userInput.toLowerCase())
    })
  }

  useEffect(() => {
    setSearch('')
  }, [currentCategory])

  return (
    <div className='lg:my-4 flex lg:block items-center w-full lg:w-auto'>
      {/* later add feature of filter badges that were added */}
      <div className='lg:pt-3 flex lg:block items-center w-full gap-2 lg:gap-0'>
        <label htmlFor='product-search' className='text-gray-700 font-medium'>Search</label>
        <input className='mr-2 p-1  lg:py-2 lg:px-1 lg:mr-0 border rounded-md w-full' id='product-search' value={productSearch} onChange={productSearchHandler} />
      </div>
    </div>
  )
}
