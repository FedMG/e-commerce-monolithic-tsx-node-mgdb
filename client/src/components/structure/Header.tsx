import { FC, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { SVGicon, SVGPath } from "../svgUtilities"
import type { HeaderButtonsProps, HeaderLogoProps, HeaderNavigationProps, HeaderProps } from "additional"
import { HeaderMenuList } from "../headerMenu"


const HeaderLogo: FC<HeaderLogoProps> = ({ name, pathLogo }) => (
  <div className="flex items-center">
    <Image
      src={pathLogo}
      className="mr-3 h-6 sm:h-9"
      width={45}
      height={45}
      alt="A cart logo of the e-commerce"
      draggable={"false"}
    />
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      {name}
    </span>
  </div>
)


const HeaderButtons: FC<HeaderButtonsProps> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className="flex items-center lg:order-2">
      <Link
        href="/user/login"
        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
        Sign In
      </Link>
      <Link
        href="/user/register"
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
      >
        Sign Up
      </Link>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-collapse-toggle="mobile-menu-2"
        type="button"
        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <SVGicon className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}>
          <SVGPath d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'/>
        </SVGicon>
        
        <SVGicon className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}>
          <SVGPath d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'/>
        </SVGicon>
      </button>
    </div>
  )
}


const HeaderNavigation: FC<HeaderNavigationProps> = ({ children, isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen ? "block" : "hidden"
      } z-10 absolute lg:relative top-full lg:top-0 bg-gray-100 lg:bg-white left-0 right-0 overflow-y-auto lg:overflow-visible max-h-calc lg:max-h-0  lg:flex justify-between items-center w-full  lg:w-auto lg:order-1" id="mobile-menu-2`}
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {children}
      </ul>
    </div>
  )
}


export const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header>
      <nav className="relative bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <HeaderLogo name='AstraShop' pathLogo='/e-cart.svg' />
          <HeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <HeaderNavigation isMenuOpen={isMenuOpen}>
            <HeaderMenuList links={links} />
          </HeaderNavigation>
        </div>
      </nav>
    </header>
  )
}
