// import { useCart } from '@/hooks/useCart'
import { Layout } from '@/components/layout'
import type { NextPageWithLayout } from '_app-types'

const Cart: NextPageWithLayout = () => {
  // const { cartItems } = useCart()

  return (
    <div>
      {/* <h1>Cart</h1> */}
      {/* {JSON.stringify(cartItems)} */}
    </div>
  )
}

Cart.getLayout = function getLayout (page, _pageProps): JSX.Element {
  return <Layout title='AstraShop | Cart'>{page}</Layout>
}

export default Cart
