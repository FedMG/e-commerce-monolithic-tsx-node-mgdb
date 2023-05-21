import { useCart } from '@/hooks/useCart'
import { Product } from 'additional'
import { Heart } from './heart'
import { ProductButton } from './productButton'
import { ProductClothingColors } from './productClothingColors'
import { ProductClothingSizes } from './productClothingSizes'
import { ProductDiscountPrice } from './productDiscount'
import { ProductMainInfoHeader } from './productMainInfoHeader'
import { ProductsNumberInput } from './productNumberInput'
import { CartIcon } from './SVGIcons'

export const ProductMainInfo: React.FC<Pick<Product, 'name' | 'price' | 'rating' | 'discount' | 'sizes' | 'colors' | 'stock'>> = ({ name, price, rating, discount, sizes, colors, stock }): React.ReactElement => {
  const { addToCart } = useCart()

  return (
    <div className='col-span-2 sm:col-span-1 lg:col-span-2 grid grid-rows-1 gap-4'>
      <form onSubmit={(e) => e.preventDefault()} className='relative border col-span-1 flex flex-col gap-1 bg-gray-100 shadow-sm rounded-b-xl sm:rounded-xl p-4 sm:p-3 md:p-6'>
        <ProductMainInfoHeader name={name} rating={rating} breakpoint='hidden sm:block'>
          <Heart />
        </ProductMainInfoHeader>
        <Heart breakpoint='absolute top-6 right-4 w-9 h-9 sm:hidden z-10' />
        <ProductDiscountPrice price={price} discount={discount} />
        <ProductClothingSizes sizes={sizes} />
        <ProductClothingColors colors={colors} />
        <ProductsNumberInput stock={stock} />
        <div className='flex flex-col pt-2 gap-2 md:gap-3 justify-end h-full'>
          <ProductButton name='Buy now' />
          <ProductButton name='Add to cart' onClick={() => addToCart({ name, price, discount })}>
            <CartIcon />
            <span className='sr-only'>Cart icon of the button</span>
          </ProductButton>
        </div>
      </form>
    </div>
  )
}
