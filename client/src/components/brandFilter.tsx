import { useEffect, useState } from "react";

import { isThereProduct, setUpperCase } from "@/utils";
import type { CategoryBrandsFilterProps } from "additional";


export const CategoryBrandFilter: React.FC<CategoryBrandsFilterProps> = ({ brands, onChange, currentCategory }) => {
  const [selecteds, setSelected] = useState<Set<string>>(() => new Set())

  const handleChange = (brandName: string, isChecked: boolean) => {
    const selectedBrands = structuredClone(selecteds)
    
    if (isChecked) {
        selectedBrands.add(brandName)        
    } else {      
        selectedBrands.delete(brandName)
    }
    
    if (selectedBrands.size) {
      onChange(product => selectedBrands.has(product.brand))
      setSelected(selectedBrands)
      return null
    }
    onChange(null)
    setSelected(selectedBrands)
 };
 
 useEffect(() => {
    setSelected(() => new Set())
 }, [ currentCategory ])

  return (
    <div className='flex flex-col'>
      <span className='text-gray-700 font-semibold mb-2'>Brands</span>
      {isThereProduct(brands) && brands.map((name) => (
        <div key={name} className='flex align-center'>
          <input type="checkbox" id={name} name='brand' value={name} onChange={(e) => handleChange(name, e.target.checked)} className='mr-3' checked={selecteds.has(name)} />
          <label htmlFor={name} className='text-gray-700'>{setUpperCase(name)}</label>
        </div>
      ))}
    </div>
  )
}
