import { Layout } from '@/components/layout'
import { CardCarousel, CoverCarousel } from '@/modules/home/'
import { fetchAllCovers, fetchAllCarouselData } from '@/services'
import { StatusApiError } from '@/errors'

import type { Cover, ProductCard } from '@/models'
import type { NextPageWithLayout } from '@/next-pages'
import type { GetStaticPropsResult } from 'next'

const PAGE_ALIGN_BREAKPOINT = 'py-4 px-6 sm:px-10 lg:px-16 xl:px-24'
interface HomeProps {
  covers: Cover[]
  categories: Record<string, ProductCard[]>[] | string[]
}

const Home: NextPageWithLayout<HomeProps> = ({ covers, categories }) => {
  return (
    <main>
      <CoverCarousel items={covers} />
      <div className={`${PAGE_ALIGN_BREAKPOINT} space-y-10`}>
        {categories?.length &&
          categories.map(category => {
            if (typeof category !== 'string') {
              const categoryName = Object.keys(category)[0]
              const categoryData = Object.values(category)[0]

              return (
                <CardCarousel key={categoryName} data={categoryData} section={categoryName}>
                  {categoryName}
                </CardCarousel>
              )
            }

            return (
              <CardCarousel key={category} data={[]} section={category}>
                {category}
              </CardCarousel>
            )
          })}
      </div>
    </main>
  )
}

Home.getLayout = function getLayout(page, _pageProps) {
  return <Layout title='Home'>{page}</Layout>
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  try {
    const covers = await fetchAllCovers(null)

    const categoriesNames = ["men's clothing", "women's clothing", 'shoes']
    const categoriesResponse = await fetchAllCarouselData(categoriesNames)
    return {
      props: {
        covers,
        categories: categoriesResponse.length ? categoriesResponse : categoriesNames
      }
    }
  } catch (error) {
    if (error instanceof StatusApiError) {
      console.error(error.getMessage())
    }
    return { notFound: true }
  }
}

export default Home
