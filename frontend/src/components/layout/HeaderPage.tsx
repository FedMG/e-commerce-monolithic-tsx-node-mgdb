import { Text } from '@/components/Text'
import { Header, Navigation } from '@/components/templates'
import { HeaderLogo, HeaderMenu, HeaderLinkCartButton } from './header'
import { LinkButton } from '@/components/LinkButton'

// later refactor
interface Links {
  path: string
  name: string
}

export type HeaderLinks = Links & { dropdown?: Links[] }

export interface HeaderPageProps {
  links: HeaderLinks[]
}

// later replace with a context
const PAGE_ALIGN_BREAKPOINT = 'px-6 sm:px-10 lg:px-16 xl:px-24 py-2.5'
const PAGE_BG_COLOR = 'bg-gray-100'

export const HeaderPage: React.FC<HeaderPageProps> = ({ links }) => {
  return (
    <Header labelledlby='header-title' className={`${PAGE_BG_COLOR} sticky top-0 z-20`}>
      <Navigation ariaLabel='Main navigation' className={`border-b border-gray-200 ${PAGE_ALIGN_BREAKPOINT}`}>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl gap-2'>
          <HeaderLogo id='header-title' src='/e-cart.svg'>
            <Text className='text-orange-500 font-medium'>Astra</Text>
            <Text className='font-semibold'>Shop</Text>
          </HeaderLogo>
          <HeaderMenu links={links} bgColor={PAGE_BG_COLOR} />
          <div className='flex items-center max-lg:flex-1 max-lg:justify-end gap-2'>
            <div className='hidden lg:flex items-center gap-2'>
              <LinkButton
                ariaLabel='Go to Sign in site'
                href='/user/login'
                className='hidden lg:block hover:text-primary-700 text-gray-800 hover:bg-gray-300 active:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none'
              >
                Sign In
              </LinkButton>
              <LinkButton
                ariaLabel='Go to Sign up site'
                href='/user/register'
                className='hidden lg:block text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none'
              >
                Sign Up
              </LinkButton>
            </div>
            <HeaderLinkCartButton />
          </div>
        </div>
      </Navigation>
    </Header>
  )
}
