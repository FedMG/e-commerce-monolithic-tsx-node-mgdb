import Link from 'next/link'

import { Layout } from '@/components/layout'
import { RegisterForm } from '@/components/register'

import type { NextPageWithLayout } from '_app-types'

const RegisterPage: NextPageWithLayout = () => {
  return (
     <>
      <h2 className='text-center text-2xl font-semibold py-3'>Register</h2>
      <div className='flex justify-center'>
        <div className='text-center w-full max-w-[36em] min-w-[18em] border-2 border-solid border-gray-300 bg-gray-200 rounded-md px-8 py-5'>
          <RegisterForm />
          <Link href='/user/login'>
          <p className='py-2 font-medium text-lg hover:text-gray-600'>Are you already registered? So, sign in</p></Link>
        </div>
    </div>
    </>
  )
}

RegisterPage.getLayout = function getLayout (page, _pageProps) {
  return <Layout title='Register'>{page}</Layout>
}

export default RegisterPage
