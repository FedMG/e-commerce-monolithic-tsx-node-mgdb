import { Text } from '@/components/typography'
import { isArrayOfString } from '@/utils'

import type { ClothingSizes } from '@/models'
import type { AddVoidCallback } from '@/utilities'
import type { ClearWarningType, Size } from '../../schema'

type Props = {
  sizeSelected: ClothingSizes | null
  sizes: ClothingSizes[]
  onClick: AddVoidCallback<Size>
} & ClearWarningType

export const ProductClothingSizes = ({
  sizes,
  onClick,
  onChange,
  sizeSelected
}: Props): React.ReactElement | null => {
  if (!isArrayOfString(sizes)) return null // later update it to return a default element

  const selectSize = ({ size }: Size) => {
    onClick({ size })
    onChange({ property: 'sizeMessage' })
  }

  return (
    <div className='flex gap-1 sm:gap-2 pt-1 md:pt-4'>
      <Text className='text-gray-700 font-medium flex-1 sm:min-w-[30px] md:min-w-[45px]'>
        Size:
      </Text>
      {sizes.map(size => (
        <span
          key={size}
          onClick={() => selectSize({ size })}
          className={`${size === sizeSelected && 'bg-green-100 ring-2 ring-green-500' } hover:ring-2 active:ring-4 flex-2 text-gray-700 text-xs font-semibold uppercase p-1 rounded-md border bg-gray-50 text-center w-full max-w-[30px] md:max-w-[40px] lg:max-w-[50px] xl:max-w-[60px]`}>
          {size}
        </span>
      ))}
    </div>
  )
}
