import { Text } from '@/components'
import { isArrayOfString } from '@/utils'

type ClothingSizes = 'S' | 'M' | 'L' | 'XL' | 'XXL'
interface ProductClothingSizesProps { sizes: ClothingSizes[] }

export const ProductClothingSizes: React.FC<ProductClothingSizesProps> = ({ sizes }): React.ReactElement | null => {
  if (!isArrayOfString(sizes)) return null

  return (
    <div className='flex gap-1 sm:gap-2 pt-1 md:pt-4'>
      <Text className='text-gray-700 font-medium flex-1 sm:min-w-[30px] md:min-w-[45px]'>Size:</Text>
      {sizes.map((size) => (
        <span key={size} className='flex-2 text-gray-700 text-xs font-semibold uppercase p-1 rounded-md border bg-gray-50 text-center w-full max-w-[30px] md:max-w-[40px] lg:max-w-[50px] xl:max-w-[60px]'>{size}</span>
      ))}
    </div>
  )
}
