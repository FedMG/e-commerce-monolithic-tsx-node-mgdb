import { isArrayOfString } from '@/utils'
import { colorOptions } from './refs'

import type { ProductColors } from '@/models'
import type { AddVoidCallback } from '@/utilities'
import type { ClearWarningType, Color } from '../../schema'

type Props = {
  colorSelected: ProductColors | null
  colors: ProductColors[]
  onClick: AddVoidCallback<Color>
} & ClearWarningType

export const ProductClothingColors = ({
  colors,
  onClick,
  onChange,
  colorSelected
}: Props): React.ReactElement | null => {
  if (!isArrayOfString(colors)) return null // later update it to return a default element

  const selectColor = ({ color }: Color) => {
    onClick({ color })
    onChange({ property: 'colorMessage' })
  }

  return (
    <div className='flex gap-1 sm:gap-2 pt-1 md:pt-4'>
      <span className='text-gray-700 font-medium flex-1 sm:min-w-[30px] md:min-w-[45px]'>
        Color:
      </span>
      {colors.map(color => (
        <span
          key={color}
          onClick={() => selectColor({ color })}
          className={`${color === colorSelected && 'ring-2 ring-green-500 border-green-500' } hover:ring-2 active:ring-4 hover:opacity-80 flex-2 p-2 sm:p-3 rounded-md border ${colorOptions[color]} w-full max-w-[30px] md:max-w-[40px] lg:max-w-[50px] xl:max-w-[60px]`}
          title={color}
        />
      ))}
    </div>
  )
}
