import { Layout } from '@/components/layout'
import { CartContainer } from '@/modules/cart/components'
import type { NextPageWithLayout } from '@/next-pages'

const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'

const Title = () => (
  <div className='flex-0 text-center'>
    <h2 className='text-gray-900 font-medium text-lg'>My Shopping Cart</h2>
  </div>
)

const Cart: NextPageWithLayout = () => (
  <div className={`relative ${PAGE_ALIGN_BREAKPOINT}`}>
    <div className='bg-gray-100 shadow-sm border rounded-xl     min-h-screen max-h-fit  flex flex-col sm:p-2 space-y-2'>
      <Title />
      <CartContainer />
    </div>
  </div>
)

Cart.getLayout = function getLayout(page, _pageProps): JSX.Element {
  return <Layout title='AstraShop | Cart'>{page}</Layout>
}

export default Cart
