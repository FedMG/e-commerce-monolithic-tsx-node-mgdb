import { useCart } from '@/hooks/useCart'

import { LinkButton } from './LinkButton'
import { CartPageIcon } from '@/assets'
import { Text } from './Text'

export const HeaderLinkCartButton = (): React.ReactElement => {
  const { cartLength } = useCart()

  return (
    <LinkButton href='/cart' className='hover:text-gray-400 relative p-1 max-lg:order-1' ariaLabel='Go to cart page'>
      <CartPageIcon />
      <Text.State id='cart-value-items' ariaLive='polite' className='font-bold text-sm leading-none rounded-md absolute border border-black p-[0.8px] -bottom-2 -right-1 mr-1 mb-1  text-orange-600 bg-gray-100'>{cartLength}</Text.State>
    </LinkButton>
  )
}
