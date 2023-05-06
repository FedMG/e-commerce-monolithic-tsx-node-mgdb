import { Layout } from '@/components/layout'
import type { NextPageWithLayout } from '_app-types'

const NotFound: NextPageWithLayout = (): React.ReactElement => {
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
        <h1 className='text-slate-900 text-lg md:text-xl xl:text-2xl font-semibold'>404 - Page Not Found</h1>
        <p className='text-slate-800 xl:text-lg'>Please try again!</p>
    </div>
    )
}

NotFound.getLayout = function getLayout (page, _pageProps) {
  return <Layout title='AstraShop | Page not found'>{page}</Layout>
}

export default NotFound
