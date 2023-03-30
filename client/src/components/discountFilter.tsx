import { useEffect, useState } from "react";

import { isNumber } from "@/utils";
import type { CategoryDiscountsFilterProps } from "additional";


export const CategoryDiscountFilter: React.FC<CategoryDiscountsFilterProps> = ({ onChange, discounts, currentCategory }) => {
  const [selecteds, setSelected] = useState<Set<number>>(() => new Set())

  const handleSelectedOptions = (discountType: number, isChecked: boolean) => {
    const selectedDiscounts = structuredClone(selecteds)
    
    if (isChecked) {
        selectedDiscounts.add(discountType)        
    } else {      
        selectedDiscounts.delete(discountType)
    }
    
    if (selectedDiscounts.size) {
      onChange(product => isNumber(product.discount) && selectedDiscounts.has(product.discount as number))
      setSelected(selectedDiscounts)
      return null
    }
    
    onChange(null)
    setSelected(selectedDiscounts)
 };
 
 useEffect(() => {
    setSelected(() => new Set())
 }, [ currentCategory ])

  return (
    <div className='flex flex-col'>
      <span className='text-gray-700 font-semibold mb-2'>Discounts</span>
      {discounts.map((discount, id) => (
        <div key={id} className='flex align-center'>
          <input type="checkbox" id={"" + discount} name='discount' value={discount} onChange={(e) => handleSelectedOptions(discount, e.target.checked)} className='mr-3' checked={selecteds.has(discount)} />
          <label htmlFor={"" + discount} className='text-gray-700'>-{discount} Off</label>
        </div>
      ))}
    </div>
  )
}
