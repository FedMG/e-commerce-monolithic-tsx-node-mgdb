// import { useCart } from '@/hooks/useCart'

import { Layout } from '@/components'
import type { NextPageWithLayout } from '@/next-pages'
// import Image from 'next/image'
// import { ProductDiscountPrice } from '@/components/productDiscount'
// import { Text } from '@/components/Text'

// import type { ProductImageProps } from 'additional'

const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'

// export const ProductImage: React.FC<ProductImageProps> = ({ className, resolution, alt, image }) => (
//   <div className='max-sm:aspect-[4/6] sm:max-lg:aspect-[4/6] lg:max-xl:aspect-[4/4] xl:max-xl:aspect-[7/5] flex justify-center align-items select-none'>
//     <Image
//       role='img'
//       priority
//       src={image?.src}
//       width={resolution}
//       height={resolution}
//       alt={alt}
//       className={`${className} w-auto h-full lg:max-w-[410px]`}
//     />
//   </div>
// )

const Cart: NextPageWithLayout = () => {
  // const { cart, removeCartItem, clearCart } = useCart()

  return (
    <div className={`${PAGE_ALIGN_BREAKPOINT} h-screen`}>
      {/* <div className='bg-gray-100 shadow-sm border rounded-xl      h-full flex flex-col p-2 space-y-2'>

        <div className='flex-0 text-center border-2 border-gray-50      text-gray-900 rounded-t-xl font-medium text-lg'>
          My Shopping Cart
        </div>
        <div className='flex-1 border-2 border-gray-50'>
          {[...cart.entries()].map(([_id, { image, name, price, discount, size, color, addedItems }]) => (
            <div key={_id} className='flex gap-2     bg-gray-50 rounded-xl'>

              <div className='flex-0'>
                <ProductImage className='rounded-t-xl sm:rounded-xl max-w-[150px]' image={image} alt={name} resolution={90} />
              </div>

              <div className='flex-1'>
                <Text className='text-gray-900 capitalize text-xl lg:text-3xl xl:text-3xl font-medium leading-tight'>{name}</Text>
                <ProductDiscountPrice price={price} discount={discount} />

                <Text className=''>Size: {size}</Text>
                <Text className={`${color}`}>Color: {color}</Text>
                <button onClick={() => removeCartItem({ productId: _id })} className='p-2 bg-gray-400 border'>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className='flex-0 text-center border-2 border-gray-50    rounded-b-xl'>
          <button onClick={clearCart} className='p-2 bg-gray-400 border'>CLEAR</button>
          <div>
            { 0 > 3500 ? <span>Envio gratis</span>: <span>Envio 150</span> }
          </div>

          <div>
            <span>Total sin envio</span><span>$250</span>
            <span>Total con envio:</span><span>$250</span>
          </div>
          <button className=''>Buy</button>
        </div>
      </div> */}
    </div>
  )
}

Cart.getLayout = function getLayout (page, _pageProps): JSX.Element {
  return <Layout title='AstraShop | Cart'>{page}</Layout>
}

export default Cart
