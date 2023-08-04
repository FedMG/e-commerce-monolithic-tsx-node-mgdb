import { Button } from '../Button'

import type { BaseComponentProps } from '@/schemas'
import type { AddVoidCallback, DropUndefined } from '@/utilities'
import type { AriaAttributes, FC } from 'react'

interface CarouselButtonProps extends BaseComponentProps {
  onClick: AddVoidCallback<undefined>
  ariaLabel: DropUndefined<AriaAttributes, 'aria-label'>
}

export const CarouselButton: FC<CarouselButtonProps> = ({
  onClick,
  ariaLabel,
  className,
  children
}) => (
  <div
    className={`text-white hidden min-[650px]:group-hover:block ${className} group/boxleft cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%]`}>
    <Button onClick={onClick} className='group/left group/right' ariaLabel={ariaLabel}>
      {children}
    </Button>
  </div>
)
