import { Layout } from '@/components/layout'
import { CoverCarousel } from '@/modules/home'
import { fetchAllCovers } from '@/services'
import { StatusApiError } from '@/errors'
import { getRequestAbort } from '@/utils'

import type { Cover } from '@/models'
import type { NextPageWithLayout } from '@/next-pages'
import type { GetStaticPropsResult } from 'next'

const TIMEOUT_ABORT = 10000

export interface HomeProps {
  covers: Cover[]
}

const Home: NextPageWithLayout<HomeProps> = ({ covers }) => {
  return (
    <main>
      <CoverCarousel items={covers} />
    </main>
  )
}

Home.getLayout = function getLayout(page, _pageProps) {
  return <Layout title='Home'>{page}</Layout>
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  const { signal, abort } = getRequestAbort()

  const timeout = setTimeout(() => {
    abort()
  }, TIMEOUT_ABORT)

  try {
    const covers = await fetchAllCovers({ signal })

    return {
      props: {
        covers
      }
    }
  } catch (error) {
    if (error instanceof StatusApiError) {
      console.error(error.getMessage())
    }
    return { notFound: true }
  } finally {
    clearTimeout(timeout)
  }
}

export default Home
