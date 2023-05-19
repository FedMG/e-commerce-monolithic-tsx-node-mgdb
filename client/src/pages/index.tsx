import { Layout } from '@/components/layout'
import type { NextPageWithLayout } from '_app-types'

const Home: NextPageWithLayout = () => {
  return (
    <div/>
  )
}

Home.getLayout = function getLayout (page, _pageProps) {
  return <Layout title='Home'>{page}</Layout>
}

export default Home
