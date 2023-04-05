import Link from 'next/link'

import { Layout } from '@/components/layout'
import { LoginForm } from '@/components/login'

import type { NextPageWithLayout } from '_app-types'

const LoginPage: NextPageWithLayout = () => {
  return (
    <>
      <h2 className='text-center text-2xl font-semibold py-3'>Login</h2>
      <div className='flex justify-center'>
        <div className='text-center w-full max-w-[36em] min-w-[18em] border-2 border-solid border-gray-300 bg-gray-200 rounded-md px-8 py-5'>
          <LoginForm />
          <Link href='/user/register'>
            <p className='py-2 font-medium text-lg hover:text-gray-600'>
              Are you new here? So, sign up!
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}

LoginPage.getLayout = function getLayout (page, _pageProps) {
  return <Layout title='Login'>{page}</Layout>
}

export default LoginPage
