import Image from 'next/image'
import type { ProductImageProps } from 'additional'

export const ProductImage: React.FC<ProductImageProps> = ({ className, resolution, alt, image }) => (
  <div className='max-sm:aspect-[4/6] sm:max-xl:aspect-[4/4] xl:max-xl:aspect-[7/5] flex justify-center align-items select-none'>
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
