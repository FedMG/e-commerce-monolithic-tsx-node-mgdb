import { isArrayOfString } from '@/utils'
import { productColor } from '@/refs'

type ProductColors = 'rose 500' | 'orange 600' | 'yellow 400' | 'lime 400' | 'green 500' | 'cyan 600' | 'violet 600' | 'fuchsia 500' | 'pink 600' | 'neutral 900' | 'stone 600' | 'slate 900' | 'white' | 'black'
interface ProductClothingColorsProps { colors: ProductColors[] }

export const ProductClothingColors: React.FC<ProductClothingColorsProps> = ({ colors }): React.ReactElement | null => {
  if (!isArrayOfString(colors)) return null

  return (
    <div className='flex gap-1 sm:gap-2 pt-1 md:pt-4'>
      <span className='text-gray-700 font-medium flex-1 sm:min-w-[30px] md:min-w-[45px]'>Color:</span>
      {colors.map((color) => (<span key={color} className={`flex-2 p-2 sm:p-3 rounded-md border hover:opacity-80 ${productColor[color]} w-full max-w-[30px] md:max-w-[40px] lg:max-w-[50px] xl:max-w-[60px]`} title={color} />))}
    </div>
  )
}
