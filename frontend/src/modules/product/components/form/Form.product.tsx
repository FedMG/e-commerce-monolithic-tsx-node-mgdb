import { useBuyRequirements, useCartFormManagement, ProductCartItem } from '../../hooks'

import { Section } from '@/components/templates'
import { Text } from '@/components/typography'
import { ProductButton } from './Button.product'
import { ProductClothingColors } from './ClothingColors.product'
import { ProductClothingSizes } from './ClothingSizes.product'
import { ProductsNumberInput } from './NumberInput.product'
import { BanknotesIcon, CartIcon } from '@/assets'

import type { Product } from '@/models'

type Props = Pick<Product, 'sizes' | 'colors' | 'stock'> & ProductCartItem

export const ProductForm = ({ productId, product, sizes, colors, stock }: Props) => {
  const { preferences, addItem, selectColor, selectSize, selectQuantity, warnings, clearWarning } =
    useCartFormManagement()
  const { status, buyNow, close } = useBuyRequirements() // later update it with user-logging context

  return (
    <form className='flex flex-col gap-1 h-full' onSubmit={e => e.preventDefault()}>
      <ProductClothingSizes
        sizes={sizes}
        sizeSelected={preferences?.size}
        onClick={selectSize}
        onChange={clearWarning}
      />
      <ProductClothingColors
        colors={colors}
        colorSelected={preferences?.color}
        onClick={selectColor}
        onChange={clearWarning}
      />
      <ProductsNumberInput stock={stock} onClick={selectQuantity} onChange={clearWarning} />

      <Section.Accessible
        role='region'
        className='flex flex-col justify-end h-full pt-2 gap-2 md:gap-3'>
        <Text as='h2' className='sr-only'>
          Button section
        </Text>
        <ProductButton name='Buy now' onClick={buyNow}>
          <BanknotesIcon />
          <Text className='sr-only'>Banknotes icon button</Text>
        </ProductButton>
        <ProductButton name='Add to cart' onClick={() => addItem({ productId, product })}>
          <CartIcon />
          <Text className='sr-only'>Cart icon button</Text>
        </ProductButton>
      </Section.Accessible>

      {/* {!status.isLogged && (
        <>
          <div className='z-30 absolute w-full h-full left-40% top-40% max-w-[300px] max-h-[300px] shadow border bg-white p-2 md:p-3 m-1'>
            <p className='font-medium text-md'>{status?.message}</p>
          </div>
          <div className='absolute inset-0 w-full h-full bg-black/30 z-20' onClick={close} />
        </>
      )} */}
    </form>
  )
}

// <div className='relative'>
//   <div className='relative'>
//     <div className='absolute inset-0 bg-black/30 z-20'>
//     </div>
//   </div>
// </div>
