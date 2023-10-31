import { useCart } from '@/hooks'

import { Layout } from '@/components/layout'
import { CartContainer } from '@/modules/cart/components'
import type { NextPageWithLayout } from '@/next-pages'

const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'

const Title = () => (
  <div className='flex-0 text-center'>
    <h2 className='text-gray-900 font-medium text-lg'>My Shopping Cart</h2>
  </div>
)

const Cart: NextPageWithLayout = () => {
  const { clearCart } = useCart()

  return (
    <div className={`${PAGE_ALIGN_BREAKPOINT}`}>
      <div className='bg-gray-100 shadow-sm border rounded-xl     min-h-screen max-h-fit  flex flex-col p-2 space-y-2'>
        <Title />
        <CartContainer />
      </div>
    </div>
  )
}

Cart.getLayout = function getLayout(page, _pageProps): JSX.Element {
  return <Layout title='AstraShop | Cart'>{page}</Layout>
}

export default Cart

// const Controls = () => (
//           {/* <div className='flex-0 text-center border-2 border-gray-50    rounded-b-xl'>
//           <button onClick={clearCart} className='p-2 bg-gray-400 border'>CLEAR</button>
//           <div>
//             { 0 > 3500 ? <span>Envio gratis</span>: <span>Envio 150</span> }
//           </div>

//           <div>
//             <span>Total sin envio</span><span>$250</span>
//             <span>Total con envio:</span><span>$250</span>
//           </div>
//           <button className=''>Buy</button>
//         </div>
//  */}

// )
