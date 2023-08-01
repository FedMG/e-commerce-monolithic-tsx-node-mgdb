import Image from 'next/image'
import type { ProductCard } from '@/models'

// later refactor Images
type ProductImage = Pick<ProductCard, 'image'>

export const ProductImage: React.FC<ProductImage> = ({ image }) => (
  <div className='relative aspect-[2/3] h-full xl:max-h-[310px] lg:max-h-[295px] md:max-h-[300px] sm:max-h-[255px] xs:max-h-[240px] max-h-[310px] m-0.5 md:m-1 flex items-center from-white to-gray-300 bg-gradient-to-br border-b border-gray-300'>
    <Image
      priority
      sizes='100vw'
      quality={20}
      fill
      className='w-auto h-full max-h-[310px] select-none overflow-hidden object-cover object-top'
      src={image.src}
      alt={'product card'}
    />
  </div>
)
