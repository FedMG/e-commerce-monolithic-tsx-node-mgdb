import { useCart } from '@/hooks/useCart'

import { Section } from './Section'
import { ProductButton } from './productButton'
import { ProductClothingColors } from './productClothingColors'
import { ProductClothingSizes } from './productClothingSizes'
import { ProductsNumberInput } from './productNumberInput'
import { CartIcon } from './SVGIcons'
import { Text } from './Text'

import type { ProductFormProps } from 'additional'

export const ProductForm: React.FC<ProductFormProps> = ({ productId, product, sizes, colors, stock }) => {
  const { addCartItem } = useCart()

  return (
    <form className='flex flex-col gap-1 h-full'>
      <ProductClothingSizes sizes={sizes} />
      <ProductClothingColors colors={colors} />
      <ProductsNumberInput stock={stock} />

      <Section.Accessible role='region' className='flex flex-col justify-end h-full pt-2 gap-2 md:gap-3'>
        <Text as='h2' className='sr-only'>Button section</Text>
        <ProductButton name='Buy now' />
        <ProductButton name='Add to cart' onClick={() => addCartItem({ productId, product: { ...product, addedItems: 2, size: sizes[0], color: colors[0] } })}>
          <CartIcon />
          <Text className='sr-only'>Cart icon of the button</Text>
        </ProductButton>
      </Section.Accessible>
    </form>
  )
}
