import Link from 'next/link'

import { Layout } from '@/components/layout'
import { LoginForm, RegisterForm } from '@/modules/user/components'
import { sessions, SESSIONS } from '@/modules/user/refs'

import type { NextPageWithLayout } from '@/next-pages'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

export interface SessionPageProps {
  session: {
    title: string
    linkName: string
    linkText: string
  }
}

const SessionPage: NextPageWithLayout<SessionPageProps> = ({ session }) => {
  return (
    <>
      <h2 className='text-center text-2xl font-semibold py-3'>{session.title}</h2>
      <div className='flex justify-center'>
        <div className='text-center w-full max-w-[36em] min-w-[18em] border-2 border-solid border-gray-200 bg-gray-100 rounded-md px-8 py-5'>
          {SESSIONS.LOGIN === session.title ? <LoginForm /> : <RegisterForm />}
          <Link href={`/user/${session.linkName}`}>
            <p className='py-2 font-medium text-lg hover:text-gray-600'>
              {session.linkText}
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}

SessionPage.getLayout = function getLayout (page, _pageProps) {
  return <Layout title={_pageProps?.session?.title}>{page}</Layout>
}

export async function getStaticPaths (): Promise<GetStaticPathsResult> {
  return {
    paths: [
      '/user/login/',
      '/user/register/'
    ],
    fallback: false
  }
}

export async function getStaticProps ({ params }: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<SessionPageProps>> {
  if (SESSIONS.LOGIN === params?.session) {
    return { props: { session: { ...sessions[SESSIONS.LOGIN] } } }
  }

  if (SESSIONS.REGISTER === params?.session) {
    return { props: { session: { ...sessions[SESSIONS.REGISTER] } } }
  }

  return { notFound: true }
}

export default SessionPage
