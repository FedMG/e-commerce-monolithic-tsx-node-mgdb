import { useNumberInput } from "@/hooks/useNumberInput"

import { ProductButton } from "@/components/productButton"
import { SVGElement, PathElement, TitleElement } from '@/components/svgElements'

import { isValidRangeNumber } from "@/utils"
import type { FC, ReactElement } from "react"
import type { ProductsNumberInputProps } from "additional"

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
            <SVGElement vBox={24} className={'w-5 h-5 fill-white stroke-white stroke-2'}>
              <PathElement d='M18 12H6' />
              <TitleElement title='Drop item' />
            </SVGElement>
          </ProductButton>
          <span className="bg-gray-50 font-semibold px-2 sm:min-w-[40px] text-center text-gray-800 py-0.5 border">{result}</span>
          <ProductButton onMouseUpLeave={reset} onMouseDown={addItem} rounded='rounded-r-md'>
            <SVGElement vBox={24} className={'w-5 h-5 fill-white stroke-white stroke-2'}>
              <PathElement d='M12 6v12m6-6H6' />
              <TitleElement title='Add item' />
            </SVGElement>
          </ProductButton>
        </div>
        </div>
      </div>
    )
}
