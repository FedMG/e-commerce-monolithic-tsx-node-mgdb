import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/hooks'

// later fix imports to other modules
import { Cart } from './templates'
import { ProductImage } from './CartImage.cart'
import { ProductRating } from '@/modules/product/components/form'
import { VendorInformation } from './VendorInformation.cart'
import { PaymentInformation } from './PaymentInformation.cart'
import { colorOptions } from '@/modules/product/components/form/refs'
import { applyDiscount } from '@/utils'
import {
  BucketTrashIcon,
  ChatBubbleIcon,
  DoubleArrowUpIcon,
  EyeIcon,
  GoToProductPageIcon
} from '@/assets'

// later refactor this component
const className = 'bg-gray-50 rounded-xl'

export const CartContainer = () => {
  const { cart, removeCartItem, clearCart } = useCart()
  const [itemSelected, setItemSelected] = useState('')
  const items = [...cart.entries()]

  if (!items?.length) {
    return (
      <div className='h-full grid place-content-center min-h-[350px]'>
        <div>
          <p className='text-gray-700 text-lg'>There are not items yet...</p>
        </div>
      </div>
    )
  }

  return (
    <Cart>
      <div className='pb-2 space-y-2'>
        <div className='flex justify-end'>
          <button
            className='text-sm sm:text-md flex items-center gap-x-1 p-1 md:p-2 rounded-md text-red-600 hover:text-red-500  font-medium active:text-gray-50 active:bg-red-600'
            onClick={clearCart}>
            Clear Cart <BucketTrashIcon />
          </button>
        </div>
        <div className='min-h-fit h-full       grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-1 gap-y-4 sm:gap-2 lg:gap-4'>
          <div
            className={`flex-1  flex flex-col gap-y-6  col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-3`}>
            {items.map(
              ([
                productId,
                { category, image, name, price, discount, size, color, itemsNumber }
              ]) => (
                <Cart.Item key={productId}>
                  <div
                    id={`cart-item-${productId}-preview`}
                    onClick={() => setItemSelected(productId)}
                    className={`${className} hover:ring-2 ring-gray-200 hover:shadow-md flex gap-1 sm:gap-2 border shadow transition-transform transform duration-[100ms] easy-in-out hover:scale-[1.03]`}>
                    <Cart.Image>
                      <div className='flex-0 relative w-28'>
                        <ProductImage
                          rounded='rounded-l-xl'
                          className='max-w-[150px] max-h-[310px]'
                          image={image}
                          alt={name}
                        />
                        <span className='absolute right-[3%] bottom-[3%] p-1 select-none border bg-gray-50 text-gray-700 font-medium rounded-md shadow-inner'>
                          x{itemsNumber}
                        </span>
                      </div>
                    </Cart.Image>

                    <Cart.Aside>
                      <div className='flex-1 flex p-1 sm:p-2'>
                        <Cart.Details>
                          <div className='flex-1 truncate space-y-2'>
                            <span className='block max-w-[100px] text-gray-900 capitalize text-xl lg:text-2xl font-semibold leading-tight'>
                              {name}
                            </span>

                            <div className='flex gap-2 relative'>
                              <span className='text-gray-800 font-semibold text-lg lg:text-xl'>
                                ${applyDiscount({ discount, price })}
                              </span>

                              {discount && (
                                <span className='pt-1 text-green-600 font-medium text-sm sm:text-md xl:text-lg'>
                                  -{discount}% OFF
                                </span>
                              )}
                            </div>

                            <div className='pt-0 sm:pt-14'>
                              <div className='flex gap-2 h-fit'>
                                <div className='flex items-center gap-2 border p-1 rounded-md'>
                                  <span className='text-sm sm:text-md'>Size:</span>
                                  <div>
                                    <span className={`font-semibold text-gray-900`}>{size}</span>
                                  </div>
                                </div>
                                <div className='flex items-center gap-2 border p-1 rounded-md'>
                                  <span className='text-sm sm:text-md'>Color:</span>
                                  <div className='h-auto w-4'>
                                    <span className={`rounded px-2 ${colorOptions[color]}`}></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Cart.Details>

                        <Cart.Controls>
                          <div className='flex-0 flex flex-col justify-between'>
                            <div className='flex items-center justify-end'>
                              <div className='min-[640px]:hidden'>
                                <a href={`#cart-item-${productId}-visualization`}>
                                  <EyeIcon />
                                </a>
                              </div>
                              <Link
                                href='/[category]/[productId]'
                                as={`/${category}/${productId}`}
                                className='p-1 rounded-md text-gray-800 hover:text-primary-800 active:text-primary-700 active:bg-gray-100 active:border active:inner-shadow'>
                                <span className='sr-only'>Go to product page</span>
                                <GoToProductPageIcon />
                              </Link>
                            </div>

                            <button
                              onClick={() => removeCartItem({ productId })}
                              className='text-sm sm:text-md flex items-center gap-x-1 p-1 rounded-md text-red-600 hover:text-red-500  font-medium active:text-gray-50 active:bg-red-600'>
                              Drop
                              <span>
                                <BucketTrashIcon />
                              </span>
                            </button>
                          </div>
                        </Cart.Controls>
                      </div>
                    </Cart.Aside>
                  </div>
                </Cart.Item>
              )
            )}
          </div>

          <Cart.Aside>
            <div
              className={`${className}         shadow border   col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 relative flex flex-col`}>
              {items
                .filter(([itemId, _]) => itemId === itemSelected)
                .map(
                  ([
                    productId,
                    {
                      category,
                      image,
                      name,
                      price,
                      discount,
                      size,
                      color,
                      itemsNumber,
                      brand,
                      rating
                    }
                  ]) => (
                    <Cart.Item key={productId}>
                      <div id={`cart-item-${productId}-visualization`}>
                        <Cart.Image>
                          <div className='relative group/item'>
                            <span className='bg-gray-50 capitalize font-bold absolute top-[0%] left-[0%] z-10 rounded-tl-lg rounded-br-md py-1 px-2 max-lg:text-md lg:text-xl text-gray-800 border-r border-b shadow-b shadow-r'>
                              {brand}
                            </span>
                            <ProductImage
                              quality={45}
                              rounded='rounded-t-xl'
                              image={image}
                              alt={name}
                            />
                            <span className='absolute right-[5%] bottom-[3.7%] px-2 py-[0.438rem] group-hover/item:opacity-90 text-lg select-none border bg-gray-50 text-gray-700 font-semibold rounded-lg shadow-inner'>
                              x{itemsNumber}
                            </span>

                            <Cart.Controls>
                              <div className='min-[640px]:hidden absolute right-[5%] top-[3%] p-1 opacity-90 bg-gray-50 border shadow rounded-full'>
                                <a href={`#cart-item-${productId}-preview`}>
                                  <DoubleArrowUpIcon />
                                </a>
                              </div>
                            </Cart.Controls>

                            <Cart.Controls>
                              <div className='absolute left-[50%] right-[50%] transform translate-x-[-50%] bottom-5 opacity-0 transition duration-300 easy-in-out group-hover/item:opacity-90 w-fit h-fit group-hover/item:bg-gray-50 flex items-center justify-end rounded-lg shadow border px-2 py-1 gap-20'>
                                <Link
                                  href='/[category]/[productId]'
                                  as={`/${category}/${productId}`}
                                  className='p-1 rounded-md text-gray-800 hover:text-primary-800 active:text-primary-700'>
                                  <span className='sr-only'>Go to product page</span>
                                  <GoToProductPageIcon />
                                </Link>
                                <button
                                  onClick={() => removeCartItem({ productId })}
                                  className='text-sm sm:text-md flex items-center gap-x-1 p-1 rounded-md text-red-600 hover:text-red-500  font-medium active:bg-primary-700'>
                                  Drop
                                  <span>
                                    <BucketTrashIcon />
                                  </span>
                                  <span className='sr-only'>Remove item from my shopping cart</span>
                                </button>
                              </div>
                            </Cart.Controls>
                          </div>
                        </Cart.Image>

                        <Cart.Details>
                          <div className='flex-1 truncate space-y-8 p-1 md:p-4'>
                            <div className='space-y-2'>
                              <span className='block max-w-[100px] text-gray-900 capitalize text-xl md:text-2xl font-semibold leading-tight'>
                                {name}
                              </span>

                              <div className='flex gap-2 relative'>
                                <span className='text-gray-800 font-semibold text-lg sm:text-xl md:text-2xl'>
                                  ${applyDiscount({ discount, price })}
                                </span>

                                {discount && (
                                  <span className='pb-1 text-green-600 font-medium text-md md:text-lg'>
                                    -{discount}% OFF
                                  </span>
                                )}
                              </div>
                            </div>

                            <div>
                              <h4 className='text-gray-700 text-md md:text-lg font-medium pt-1 mb-4 border-b border-gray-200'>
                                Seller&apos;s information
                              </h4>
                              <VendorInformation />
                            </div>

                            <div>
                              <h4 className='text-gray-700 text-md font-medium pt-1 mb-4 border-b border-gray-200'>
                                Product Rating
                              </h4>
                              <ProductRating votes={rating?.votes} stars={rating?.stars} />
                            </div>

                            <div className='flex flex-col'>
                              <h4 className='text-gray-700 text-md md:text-lg font-medium pt-1 mb-2 border-b border-gray-200'>
                                Category
                              </h4>
                              <span className='text-gray-700 text-md capitalize'>{category}</span>
                            </div>

                            <div className='pt-2'>
                              <h4 className='text-gray-700 text-md md:text-lg font-medium pt-1 mb-4 border-b border-gray-200'>
                                Preferences
                              </h4>
                              <div className='flex gap-2 h-fit'>
                                <div className='flex items-center gap-2 border p-1 rounded-md'>
                                  <span className='text-sm sm:text-md'>Size:</span>
                                  <div>
                                    <span className={`font-semibold text-gray-900`}>{size}</span>
                                  </div>
                                </div>
                                <div className='flex items-center gap-2 border p-1 rounded-md'>
                                  <span className='text-sm sm:text-md'>Color:</span>
                                  <div className='h-auto w-4'>
                                    <span className={`rounded px-2 ${colorOptions[color]}`}></span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='pt-2'>
                              <h4 className='text-gray-700 text-md md:text-lg font-medium pt-1 mb-4 border-b border-gray-200'>
                                People&apos;s opinion
                              </h4>
                              <p className='flex flex-wrap gap-x-1 whitespace-normal no-truncate text-gray-700 text-md'>
                                <span>
                                  <span className='cursor-pointer text-primary-500 hover:text-primary-700 font-medium'>
                                    Check out
                                  </span>{' '}
                                  what people are saying
                                </span>
                                about this product
                                <span className='w-fit max-w-fit'>
                                  <ChatBubbleIcon />
                                </span>
                              </p>
                            </div>

                            <div>
                              <h4 className='text-gray-700 text-md md:text-lg font-medium pt-1 mb-4 border-b border-gray-200'>
                                Payment&apos;s information
                              </h4>
                              <PaymentInformation />
                            </div>
                          </div>
                        </Cart.Details>
                      </div>
                    </Cart.Item>
                  )
                )}
            </div>
          </Cart.Aside>
        </div>
      </div>
    </Cart>
  )
}
