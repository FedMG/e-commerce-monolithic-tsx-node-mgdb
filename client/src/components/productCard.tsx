import Image from "next/image";
import { getPriceWithDiscount } from "@/utils";

import type { DiscountInfoProps, ProductCardProps } from "additional";
import type{ FC, ReactElement } from "react";


const DiscountInfo: FC<DiscountInfoProps> = ({ children, discount, price}): ReactElement | null => {
  if (!children) return null
  if (!discount)
    return (
      <div className='w-full relative'>
      <span className='apect-ratio -ml-1'></span>
      <div className='w-full flex justify-between items-center'>
        {children[0]}
        {children[1]}
      </div>
      </div>
    );

  return (
    <div className='w-full relative'>
      <span className='-ml-1 select-none text-gray-600 dark:text-gray-300 light:text-gray-700 font-semibold text-sm lg:text-md'>
        <del>${price}</del>
      </span>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center'>
          {children[0]}
          <span className='pb-[0.3rem] pl-0.5 lg:pl-3 text-green-600 dark:text-green-500 light:text-green-700 text-xs lg:text-sm font-medium'>
            {" "}
            -{discount}% OFF
          </span>
        </div>
        {children[1]}
      </div>
    </div>
  )
}

export const ProductsCard: React.FC<ProductCardProps> = ({ element }) => {
  const { name, image, price, discount, rating } = element

  return (
    <div className='h-full max-h-430 flex flex-col dark:bg-slate-700 bg-gray-100 rounded-sm shadow-[0_15px_0_15px_1_16px_#777777] border-2 border-solid border-[#f5f5f5] border-radius-xs hover:dark:bg-slate-600 hover:bg-gray-300 transition transform duration-[100ms] easy-in-out hover:scale-[1.03]'>
      <div className='aspect-[2/3] h-full xl:max-h-310 lg:max-h-295 md:max-h-300 sm:max-h-255 xs:max-h-240 max-h-310 m-0.5 md:m-1 flex items-center from-white to-gray-300 bg-gradient-to-br border-b-1 border-gray-200 dark:border:bg-gray-800'>
        <Image height={290} width={300} sizes='100vw' className='h-full w-auto max-h-310 select-none overflow-hidden' src={image.src} alt={`${name} card product`} />
      </div>

      <div className='w-full p-[0.3em] pt-0 pb-1 sm:p-[0.5em] sm:pt-0 sm:pb-1.1 md:p-[0.6em] md:pt-1 md:pb-2 flex-end  '>
        <DiscountInfo discount={discount} price={price}>
          <p className='font-bold text-md lg:text-lg text-gray-900 dark:text-white light:text-gray-700 leading-tight'>
            ${getPriceWithDiscount(discount, price)}
          </p>

          <span className='leading-normal dark:text-white light:text-gray-900 text-gray-800 font-medium text-md md:text-lg'>
            <span className='text-orange-600'>⭐</span>
            {rating}
          </span>
        </DiscountInfo>
        
        <p className='leading-normal text-md xs:max-lg:text-md lg:text-lg dark:text-white light:text-gray-700 pt-3 h-full line-clamp-2 truncate'>
          {name}
        </p>
      </div>
    </div>
  )
}
