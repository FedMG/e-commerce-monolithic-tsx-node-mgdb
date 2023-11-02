import { useCart } from '@/hooks'
import { Layout } from '@/components/layout'

import { CartContainer } from '@/modules/cart/components'
import { ProductButton } from '@/modules/product/components/form'
import { BanknotesIcon, BucketTrashIcon } from '@/assets'
import { applyDiscount } from '@/utils'

import type { NextPageWithLayout } from '@/next-pages'

const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'

const Title = () => (
  <div className='flex-0 text-center'>
    <h2 className='text-gray-900 font-medium text-lg'>My Shopping Cart</h2>
  </div>
)

const Cart: NextPageWithLayout = () => {
  const { cart, clearCart } = useCart()

  const totalPrice = {
    getTotal: function () {
      let total = 0
      cart.forEach(({ price, discount, itemsNumber }) => {
        total +=
          itemsNumber > 1
            ? applyDiscount({ price, discount }) * itemsNumber
            : applyDiscount({ price, discount })
      }, this)
      return total
    }
  }

  return (
    <div className={`relative ${PAGE_ALIGN_BREAKPOINT}`}>
      <div className='bg-gray-100 shadow-sm border rounded-xl     min-h-screen max-h-fit  flex flex-col sm:p-2 space-y-2'>
        <Title />
        <div className='p-0 sm:p-1 md:p-2 space-y-1'>
          <CartContainer />

          <div className='grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-2 sm:gap-2 lg:gap-4'>
            <div className='flex-1 bg-gray-50 p-1 rounded-lg shadow-inner border text-center col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-3'>
              <span className='font-medium text-lg text-gray-800'>
                Total:{' '}
                <span className='font-bold text-xl text-gray-800'>${totalPrice?.getTotal()}</span>
              </span>
            </div>

            <div className='col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-2'>
              <ProductButton name='Buy now' onClick={() => undefined}>
                <BanknotesIcon />
                <span className='sr-only'>Banknotes icon button</span>
              </ProductButton>
              <button
                disabled={!cart?.size}
                className='text-center justify-center text-sm sm:text-md flex items-center gap-x-1 p-1 rounded-lg md:text-lg hover:text-gray-100 hover:bg-red-700  font-medium bg-red-600 text-gray-50 active:text-red-600 active:bg-gray-50 active:inner-shadow shadow border'
                onClick={clearCart}>
                <BucketTrashIcon />
                Clear Cart
                <span className='sr-only'>Trashbucket icon button</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Cart.getLayout = function getLayout(page, _pageProps): JSX.Element {
  return <Layout title='AstraShop | Cart'>{page}</Layout>
}

export default Cart
