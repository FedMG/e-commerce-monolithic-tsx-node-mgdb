import Link from 'next/link'
import { useCart } from '@/hooks'

import { ProductImage } from './CartImage.cart'
import { applyDiscount } from '@/utils'
import { Cart } from './templates'
import { colorOptions } from '@/modules/product/components/form/refs'

// import type { CartInitialState } from '@/models'

// interface Props {
//   cart: CartInitialState
//   removeCartItem: ({ productId }: { productId: string }) => void
// }

const className = 'bg-gray-100 rounded-xl  '

export const CartContainer = () => {
  const { cart, removeCartItem, clearCart } = useCart()
  const items = [...cart.entries()]

  return (
    <Cart>
      <div className='min-h-fit h-full        grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 gap-y-4 sm:gap-4'>
        <div
          className={`flex-1 ${className}  flex flex-col gap-4      px-4 pt-1 sm:p-0 col-span-2 sm:col-span-2 lg:col-span-3`}>
          {items.map(([productId, { category, image, name, price, discount, size, color }]) => (
            <Cart.Item key={productId}>
              <div className={`${className} flex gap-2 border shadow p-1`}>
                <Cart.Image>
                  <div className='flex-0'>
                    <ProductImage
                      className='rounded-lg max-w-[150px]'
                      image={image}
                      alt={name}
                      resolution={90}
                    />
                  </div>
                </Cart.Image>

                <Cart.Aside>
                  <div className='flex-1 flex p-2'>
                    <Cart.Details>
                      <div className='flex-1'>
                        <span className='block text-gray-900 capitalize text-xl lg:text-3xl xl:text-3xl font-medium leading-tight'>
                          {name}
                        </span>

                        <div className='flex gap-2'>
                          <span className='text-gray-900 font-semibold text-lg md:text-2xl'>
                            ${applyDiscount({ discount, price })}
                          </span>

                          <span className='text-green-600 font-medium text-sm sm:text-md lg:text-lg'>
                            -%{discount} Off
                          </span>
                        </div>

                        <div className='flex gap-2'>
                          <div className='flex gap-2'>
                            <span className='font-medium'>Size:</span>
                            <div>
                              <span className={`border shadow p-1 rounded-md`}>{size}</span>
                            </div>
                          </div>
                          <div className='flex gap-2'>
                            <span className='font-medium'>Color:</span>
                            <div>
                              <span className={`border shadow p-1 rounded-md ${colorOptions[color]}`}></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Cart.Details>

                    <Cart.Controls>
                      <div className='flex-0 flex flex-col justify-between'>
                        <div className='flex items-center justify-end'>
                          <Link
                            href='/[category]/[productId]'
                            as={`/${category}/${productId}`}
                            className='p-2 rounded-md text-gray-800 hover:text-primary-800 border shadow active:text-primary-700'>
                            Go
                          </Link>
                        </div>

                        <button
                          onClick={() => removeCartItem({ productId })}
                          className='px-3 py-2 rounded-md bg-primary-700 hover:bg-primary-800 border shadow text-gray-50 font-medium active:bg-primary-700'>
                          Remove
                        </button>
                      </div>
                    </Cart.Controls>
                  </div>
                </Cart.Aside>
              </div>
            </Cart.Item>
          ))}
        </div>
        <div
          className={`${className}               col-span-2 sm:col-span-1 lg:col-span-2 relative flex flex-col`}></div>
      </div>
    </Cart>
  )
}
