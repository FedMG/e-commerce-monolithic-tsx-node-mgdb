import { FC, ReactElement } from "react"

import { useNumberInput } from "@/hooks/useNumberInput"
import { ProductButton } from "./productButton"

import { isValidRangeNumber } from "@/utils"
import type { NumberSVGInputProps, ProductsNumberInputProps } from "additional"

const NumberSVGInput: FC<NumberSVGInputProps> = ({ strokeWidth = 1.6, d, srOnly }): ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={strokeWidth} className={'w-5 h-5 fill-white stroke-white'}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    <title className='sr-only'>{srOnly}</title>
  </svg>
)

export const ProductsNumberInput: FC<ProductsNumberInputProps> = ({ itemsNumber }): ReactElement => {
  const { addItem, dropItem, reset, result } = useNumberInput(isValidRangeNumber(itemsNumber) ? itemsNumber : 0)

  return (
      <div className="flex items-center justify-between gap-2 md:gap-4 pt-1 md:pt-4">
        <span className='font-medium text-gray-700 hidden sm:block'>Stock: <span className='text-gray-500'>{itemsNumber}</span></span>
        <div className="flex items-center gap-2 justify-between w-full sm:w-auto">
        <label htmlFor="items number" className="font-medium text-gray-700">Items
          <span className='font-medium text-gray-500 sm:hidden'>({itemsNumber})</span>:
        </label>
        <div className="flex">
          <ProductButton onMouseUpLeave={reset} onMouseDown={dropItem} rounded='rounded-l-md'>
            <NumberSVGInput srOnly='Drop item' d='M18 12H6' strokeWidth={2.1} />
          </ProductButton>
          <span className="bg-gray-50 font-semibold px-2 min-w-[40px] text-center text-gray-800 py-0.5 border">{result}</span>
          <ProductButton onMouseUpLeave={reset} onMouseDown={addItem} rounded='rounded-r-md'>
            <NumberSVGInput srOnly='Add item' d='M12 6v12m6-6H6' strokeWidth={2.1} />
          </ProductButton>
        </div>
        </div>
      </div>
    )
}
