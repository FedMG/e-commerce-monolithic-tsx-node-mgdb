import { FC, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { HeaderMenuList } from '../headerMenu'
import { SVGElement, PathElement } from '@/components/svgElements'

import type { HeaderButtonsProps, HeaderLogoProps, HeaderNavigationProps, HeaderProps } from 'additional'
import { isString } from '@/utils'

// later refactor this code
const HeaderLogo: FC<HeaderLogoProps> = ({ name, pathLogo }) => (
  <Link href='/' className='flex items-center' as='/'>
    <Image
      priority
      src={pathLogo}
      className='mr-3 h-6 sm:h-9 w-auto select-none'
      width={45}
      height={45}
      alt='A cart logo of the e-commerce'
      draggable='false'
    />
    <span className='self-center text-xl font-semibold whitespace-nowrap'>
      <span className='text-orange-500 font-medium'>{name}</span><span>Shop</span>
    </span>
  </Link>
)

const HeaderButtons: FC<HeaderButtonsProps> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className='flex items-center lg:order-2 gap-2'>
      <Link
        href='/user/login'
        className='hidden lg:block hover:text-primary-700 text-gray-800 hover:bg-gray-300 active:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none'
      >
        Sign In
      </Link>
      <Link
        href='/user/register'
        className='hidden lg:block text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none'
      >
        Sign Up
      </Link>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-collapse-toggle='mobile-menu-2'
        type='button'
        className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none'
        aria-controls='mobile-menu-2'
        aria-expanded='false'
      >
        <span className='sr-only'>Open main menu</span>
        <SVGElement className={`stroke-gray-400 fill-gray-600 w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} ariaHidden={isMenuOpen}>
          <PathElement d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' />
        </SVGElement>
        <SVGElement className={`stroke-gray-400 fill-gray-600 w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} ariaHidden={!isMenuOpen}>
          <PathElement d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' />
        </SVGElement>
      </button>
    </div>
  )
}

const HeaderNavigation: FC<HeaderNavigationProps> = ({ children, isMenuOpen, bgColor, selectOption }) => {
  return (
    <div
      className={`${
        isMenuOpen ? 'block' : 'hidden'
      } ${isString(bgColor) ? bgColor as string : ''} z-10 absolute lg:relative top-full lg:top-0 left-0 right-0 lg:overflow-visible lg:max-h-0 lg:flex justify-between items-center w-full lg:w-auto lg:order-1 shadow shadow-gray-300`}
      id='mobile-menu-2'
    >
      <ul className='bg-inherit flex items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
        <div aria-label='hidden' className='lg:hidden p-2 w-full border-y border-gray-200 px-6 sm:px-12 flex gap-2'>
          <Link
            href='/user/login'
            className='w-full font-medium rounded-lg text-sm px-4 py-2 focus:outline-none hover:text-primary-700 text-gray-800 hover:bg-gray-300 active:bg-gray-200 border text-center'
            onClick={selectOption}
          >
            Sign In
          </Link>
          <Link
            href='/user/register'
            className='w-full font-medium rounded-lg text-sm px-4 py-2 focus:outline-none text-white bg-primary-700 hover:bg-primary-800 border text-center'
            onClick={selectOption}
          >
            Sign Up
          </Link>
        </div>
        {children}
      </ul>
    </div>
  )
}

export const Header: React.FC<HeaderProps> = ({ links, bgColor = 'bg-gray-100' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const selectOption = (): void => setIsMenuOpen(false)

  return (
    <header className={`${bgColor} sticky top-0 z-20`}>
      <nav className='border-b border-gray-200 px-6 sm:px-10 lg:px-16 xl:px-24 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <HeaderLogo name='Astra' pathLogo='/e-cart.svg' />
          <HeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <HeaderNavigation isMenuOpen={isMenuOpen} bgColor={bgColor} selectOption={selectOption}>
            <HeaderMenuList links={links} bgColor={bgColor} selectOption={selectOption} />
          </HeaderNavigation>
        </div>
      </nav>
    </header>
  )
}
