import { useEffect, useState } from 'react'
import type { CategoryNextFilterProps } from '../schemas'

export const useBrandFilter = ({ onChange, currentCategory }: CategoryNextFilterProps) => {
  const [selecteds, setSelected] = useState<Set<string>>(() => new Set())
  const handleChange = (brandName: string, isChecked: boolean): void => {
    const selectedBrands = structuredClone(selecteds)

    if (isChecked) {
      selectedBrands.add(brandName)
    } else {
      selectedBrands.delete(brandName)
    }

    if (selectedBrands.size > 0) {
      onChange({ field: 'brand', value: product => selectedBrands.has(product.brand) })
      setSelected(selectedBrands)
      return undefined
    }
    onChange({ field: 'brand', value: null })
    setSelected(selectedBrands)
  }

  useEffect(() => {
    setSelected(() => new Set())
  }, [currentCategory])

  return { handleChange, selecteds }
}
