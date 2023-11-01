import Image from 'next/image'

type ProductImageProps = {
  className?: string
  aspect?: string
  quality?: number
  maxh?: string
  alt: string
  rounded?: string
  image: {
    src: string
  }
}

export const ProductImage: React.FC<ProductImageProps> = ({
  className,
  alt,
  image,
  aspect,
  rounded = 'rounded-lg',
  quality = 25
}) => (
<div className={`${rounded} ${aspect || 'aspect-[2/3] md:aspect-[5/8]'} bg-gray-100 relative h-full select-none flex justify-center align-items`}>
    <Image
      fill
      priority
      role='img'
      sizes='100vw'
      src={image?.src}
      quality={quality}
      className={`${rounded || 'rounded-l-xl'} ${className} w-auto h-full select-none overflow-hidden object-cover object-top`}
      alt={alt}
    />
  </div>
)
