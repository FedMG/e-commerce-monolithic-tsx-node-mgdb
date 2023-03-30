import { useEffect, useState } from "react"

import { CategorySearchFilterProps } from "additional"
import { setUpperCase } from "@/utils"

export const CategorySearchFilter: React.FC<CategorySearchFilterProps> = ({ onChange, currentCategory, productsNumber }) => {
  const [productSearch, setSearch] = useState('')

  const productSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value
    setSearch(userInput)

    onChange((product) => {
       const productName = product.name.toLowerCase()
       return productName.includes(userInput.toLowerCase())
    })
  }
  
  useEffect(() => {
    setSearch('')
  },[currentCategory])

  return (
    <div className="my-4">
      <p className="text-md text-gray-700">
        <strong>{productsNumber}</strong> products found in category <strong>{setUpperCase(typeof currentCategory === 'string' ? currentCategory : '')}</strong>
      </p>
      <div className='pt-3'>
        <label htmlFor='product-search'>Search</label>
        <input className='w-full py-2 px-1 border' id='product-search' value={productSearch} onChange={productSearchHandler} />
      </div>
    </div>    
  )
}
