import Image from 'next/image'

import type { BaseComponentProps } from '@/schemas'
import type { Product } from '@/models'

type ProductImageProps = Pick<Product, 'image'> & Pick<BaseComponentProps, 'className'> & {
  resolution: number
  alt: string
}

export const ProductImage: React.FC<ProductImageProps> = ({ className, resolution, alt, image }) => (
  <div className='max-sm:aspect-[4/6] sm:max-lg:aspect-[4/6] lg:max-xl:aspect-[4/4] xl:max-xl:aspect-[7/5] flex justify-center align-items select-none'>
    <Image
      role='img'
      priority
      src={image?.src}
      width={resolution}
      height={resolution}
      alt={alt}
      className={`${className} w-auto h-full lg:max-w-[410px]`}
    />
  </div>
)
