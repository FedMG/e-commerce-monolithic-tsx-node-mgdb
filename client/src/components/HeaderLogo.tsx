import Image from 'next/image'
import { LinkButton } from './LinkButton'
import type { HeaderLogoProps } from 'additional'

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ children, src, id }) => (
  <LinkButton href='/' className='flex items-center' ariaLabel='Go to Homepage'>
    <Image
      priority
      src={src}
      className='mr-3 h-6 sm:h-9 w-auto select-none'
      width={45}
      height={45}
      alt='A cart logo of the e-commerce'
      draggable='false'
      aria-hidden
    />
    <div id={id} className='self-center text-xl whitespace-nowrap'>
      {children}
    </div>
  </LinkButton>
)
