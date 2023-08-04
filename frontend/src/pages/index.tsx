import { fetchAllCovers } from '@/services'

import { Layout } from '@/components'
import { CardCarousel, CoverCarousel } from '@/modules/home'
import { StatusApiError } from '@/errors'

import type { Cover } from '@/models'
import type { NextPageWithLayout } from '@/next-pages'
import type { GetStaticPropsResult } from 'next'

const TIMEOUT_ABORT = 30000
const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'

interface HomeProps {
  covers: Cover[]
}

const Home: NextPageWithLayout<HomeProps> = ({ covers }) => {
  return (
    <main>
      <CoverCarousel items={covers} />
      <div className={`${PAGE_ALIGN_BREAKPOINT} space-y-10`}>
        <CardCarousel section={"men's clothing"}>Men&apos;s clothing</CardCarousel>
        <CardCarousel section={"women's clothing"}>Women&apos;s clothing</CardCarousel>
        <CardCarousel section={'shoes'}>Shoes</CardCarousel>
      </div>
    </main>
  )
}

Home.getLayout = function getLayout(page, _pageProps) {
  return <Layout title='Home'>{page}</Layout>
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  const controller = new AbortController()

  const timeout = setTimeout(() => {
    controller.abort()
  }, TIMEOUT_ABORT)

  try {
    const covers = await fetchAllCovers({ signal: controller.signal })
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
