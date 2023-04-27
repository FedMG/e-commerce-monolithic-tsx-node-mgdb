import { isArrayOfString } from '@/utils'
import { productColor } from '@/refs'
import type { ProductVariants } from 'additional'

export const ProductClothingColors = ( { colors }: {colors: string[] }): React.ReactElement | null => {
  if (!isArrayOfString(colors)) return null

  return (
    <div className="flex gap-1 sm:gap-2 pt-1 md:pt-4">
      <span className='text-gray-700 font-medium flex-1 min-w-[45px]'>Color:</span>
      {colors.map((color) => (<span className={`flex-2 p-2 sm:p-3 rounded-md border hover:opacity-80 ${productColor[color as ProductVariants]} w-full max-w-[70px]`} title={color} />))}
   </div>
  )
}
