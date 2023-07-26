import { useEffect, useState } from 'react'
import type { CategoryNextFilterProps } from '../schemas'

export const useSearchFilter = ({ onChange, currentCategory }: CategoryNextFilterProps) => {
  const [productSearch, setSearch] = useState('')

  const productSearchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const userInput = e.target.value
    setSearch(userInput)

    onChange({
      field: 'name',
      value: product => {
        const productName = product.name.toLowerCase()
        return productName.includes(userInput.toLowerCase())
      }
    })
  }

  useEffect(() => {
    setSearch('')
  }, [currentCategory])

  return { productSearchHandler, productSearch }
}
