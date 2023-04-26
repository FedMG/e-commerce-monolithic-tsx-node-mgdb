import { isArrayOfString } from '@/utils'
import { productColor } from '@/refs'
import type { ProductVariants } from 'additional'

export const ProductClothingColors = ( { colors }: {colors: string[] }): React.ReactElement | null => {
  if (!isArrayOfString(colors)) return null
  
  return (
    <div className="flex gap-1 sm:gap-2 pt-1 md:pt-3">
      {colors.map((color) => (<span className={`p-4 rounded-md border ${productColor[color as ProductVariants]} w-full max-w-[70px]`} title={color} />))}
   </div>
  )
}
