import { isArrayOfString } from '@/utils'
import type { ClothingSizes } from 'additional'

export const ProductClothingSizes = ({ sizes }: { sizes: ClothingSizes[] }): React.ReactElement | null => {
  if (!isArrayOfString(sizes)) return null

  return (
    <div className="flex gap-1 sm:gap-2 pt-1 md:pt-3">
      {sizes.map((size) => (<span className="text-gray-700 text-xs font-semibold uppercase p-1 rounded-md border bg-gray-50 text-center w-full max-w-[70px]">{size}</span>))}
    </div>
  )
}
