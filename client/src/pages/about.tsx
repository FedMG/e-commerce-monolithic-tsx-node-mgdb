import { Layout } from "@/components/layout"
import { CreateBlob, SVGPath } from "@/components/createBlobs"

import type { NextPageWithLayout } from "_app-types"

const About: NextPageWithLayout = () => {
  return (
    <div className='pt-10'>
      <div className='relative'>
        <CreateBlob className="top-15 left-20 md:left-5 -z-10 animate-bounces absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[580px] lg:h-[580px]">
          <SVGPath d='M13.3,-23.2C17.6,-18,21.7,-14.9,26.2,-10.4C30.8,-5.9,35.8,0,35.3,5.2C34.7,10.3,28.5,14.8,23.7,20.9C19,27,15.7,34.8,10.6,36.6C5.4,38.4,-1.7,34.2,-7.2,30.1C-12.7,26,-16.6,21.8,-22.7,17.9C-28.8,14,-37.2,10.3,-38.5,5.2C-39.8,0.1,-34,-6.4,-29.7,-12.6C-25.4,-18.9,-22.6,-24.9,-17.9,-29.9C-13.2,-34.9,-6.6,-38.9,-1.1,-37.2C4.5,-35.6,9,-28.4,13.3,-23.2Z' />
        </CreateBlob>
        <CreateBlob className='right-10 top-80 -z-10 animate-bounces absolute w-[240px] h-[240px] md:w-[290px] md:h-[290px] lg:w-[500px] lg:h-[500px]'>
          <SVGPath d='M21.1,-29.1C28.6,-23.6,36.8,-19.1,39.4,-12.5C42,-5.9,38.9,2.9,36.1,11.7C33.2,20.5,30.5,29.4,24.5,34.2C18.5,39.1,9.3,39.9,1.9,37.3C-5.5,34.7,-11.1,28.8,-17.2,24C-23.3,19.2,-30,15.6,-34.9,9.2C-39.9,2.9,-43.1,-6.1,-39.5,-11.5C-35.9,-16.9,-25.5,-18.8,-17.8,-24.3C-10,-29.7,-5,-38.7,0.9,-40C6.8,-41.2,13.6,-34.6,21.1,-29.1Z' />
        </CreateBlob>
      </div>
      <div className='flex items-center justify-center'>
      <div className='max-w-[800px] mx-0 my-auto p-10 backdrop-blur-[5px] rounded-lg border-b-xl bg-gray-300-opacity-45'>
        <h2 className='text-xl font-bold dark:text-white text-slate-800'>Who are us?</h2>
        <hr/>
        <p className='text-md text-slate-900 font-medium font-sans'>
          <span className='block pb-10'>
            <span className='block py-1'>
              Welcome to our ecommerce store!
            </span>
            We&apos;re a small team of passionate individuals who believe that
            everyone should have access to high-quality, affordable products.
          </span>
          <span className='block pb-10'>
            <strong className='text-slate-900 text-lg'>Our mission: </strong>
            <span className='block py-1'>
              is to bring together the best products from around the world and
              make them accessible to you. We pride ourselves on our commitment
              to customer satisfaction. From the moment you place your order to
              the moment it arrives at your doorstep, we&apos;re dedicated to
              ensuring that you have the best possible experience.
            </span>
            We believe that shopping online should be easy, stress-free, and
            enjoyable, and we work hard to make that a reality for every
            customer.
          </span>
          <span className='block pb-10'>
            <strong className='text-slate-900 text-lg'>At our store: </strong>
            <span className='block py-1'>
              you&apos;ll find a wide variety of products, from clothing and
              accessories to keep you looking stylish and on-trend. We&apos;re
              constantly adding new items to our inventory, so be sure to check
              back often to see what&apos;s new.
            </span>
          </span>
          Thank you for choosing to shop with us. We appreciate your business
          and look forward to providing you with exceptional service and quality
          products.
        </p>
      </div>
      </div>
    </div>
  )
}

About.getLayout = function getLayout (page, _pageProps) {
  return <Layout title={'About us'}>{page}</Layout>
}

export default About;
