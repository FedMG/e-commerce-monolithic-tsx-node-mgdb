import { useEffect, useState } from 'react'
import type { CategoryNextFilterProps } from '../schemas'
import { isNumber } from '@/utils'

export const useDiscountFilter = ({ onChange, currentCategory }: CategoryNextFilterProps) => {
  const [selecteds, setSelected] = useState<Set<number>>(() => new Set())

  const handleSelectedOptions = (discountType: number, isChecked: boolean): void => {
    const selectedDiscounts = structuredClone(selecteds)

    if (isChecked) {
      selectedDiscounts.add(discountType)
    } else {
      selectedDiscounts.delete(discountType)
    }

    if (selectedDiscounts.size > 0) {
      onChange({
        field: 'discount',
        value: product =>
          isNumber(product.discount) && selectedDiscounts.has(product.discount as number)
      })
      setSelected(selectedDiscounts)
      return
    }

    onChange({ field: 'discount', value: null })
    setSelected(selectedDiscounts)
  }

  useEffect(() => {
    setSelected(() => new Set())
  }, [currentCategory])

  return { handleSelectedOptions, selecteds }
}
