import { useEffect, useState } from "react"
import { CategorySearchProps } from "additional"

export const CategorySearchFilter: React.FC<CategorySearchProps> = ({ onChange, currentCategory }) => {
  const [productSearch, setSearch] = useState('')
  
  const productSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onChange(e.target.value)
  }
  
  useEffect(() => {
    setSearch('')
  },[currentCategory])
  
  return <input value={productSearch} onChange={productSearchHandler} />
}
