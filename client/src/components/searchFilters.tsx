import { useEffect, useState } from "react"
import { CategoryNextFilterProps } from "additional"

export const CategorySearchFilter: React.FC<CategoryNextFilterProps> = ({ onChange, currentCategory }) => {
  const [productSearch, setSearch] = useState('')
  
  const productSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onChange(e.target.value)
  }
  
  useEffect(() => {
    setSearch('')
  },[currentCategory])

  return (
    <div className='pt-3'>
      <label htmlFor='product-search'>Search</label>
      <input className='w-full py-2 px-1 border' id='product-search' value={productSearch} onChange={productSearchHandler} />
    </div>
  )
}
