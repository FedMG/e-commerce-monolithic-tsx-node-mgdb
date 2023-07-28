import { SVGElement } from '@/components/templates'

import type { AriaAttributes, FC } from 'react'
import type { DropUndefined } from '@/utilities'

interface IconsProps {
  className: string
}

interface HeartIconProps extends IconsProps {
  onClick: () => void
}

interface HamburgerIconProps extends IconsProps {
  ariaHidden: DropUndefined<AriaAttributes, 'aria-hidden'>
}

// later check and update all ARIA-ATTRIBUTES such as role | aria-hidden | labelledby | etc...
export const HeartIcon: React.FC<HeartIconProps> = ({ onClick, className }): React.ReactElement => (
  <SVGElement.WithEvent role='img' onClick={onClick} className={className} viewBox='0 0 24 24'>
    <SVGElement.Path d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z' />
  </SVGElement.WithEvent>
)

export const RemoveItemIcon = (): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
  </svg>
)

export const GoToArrowIcon = (): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
    <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25' />
  </svg>
)

export const DragIcon = (): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
    {/* <SVGElement role='img' className='w-6 h-6 mr-2 fill-none' viewBox='0 0 24 24' ariaHidden='false'> */}
    <SVGElement.Path d='M3.75 9h16.5m-16.5 6.75h16.5' />
  </svg>
)

export const HomeIcon = (): JSX.Element => (
  <SVGElement role='img' className='w-4 h-4 mr-2 fill-current' viewBox='0 0 20 20' ariaHidden='false'>
    <SVGElement.Path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
  </SVGElement>
)

export const GreaterThanIcon = (): JSX.Element => (
  <SVGElement role='img' className='w-6 h-6 text-gray-400 fill-current' viewBox='0 0 20 20' ariaHidden>
    <SVGElement.Path d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' />
  </SVGElement>
)

export const StarIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement role='img' className={`w-5 h-5 lg:w-6 lg:h-6 ${className}`} viewBox='0 0 20 20' ariaHidden>
    <SVGElement.Path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
  </SVGElement>
)

export const CartIcon = (): JSX.Element => (
  <SVGElement role='img' className='w-5 h-5 mr-2 -ml-1 fill-current' ariaHidden viewBox='0 0 20 20'>
    <SVGElement.Path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
  </SVGElement>
)

export const CartPageIcon = (): JSX.Element => (
  <SVGElement role='img' viewBox='0 0 24 24' className='w-6 h-6 stroke-2 fill-none stroke-current' labelledby='my-cart-page-icon' ariaHidden>
    <SVGElement.Path d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' />
  </SVGElement>
)

export const DownArrowIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement role='img' className={`w-4 h-4 ml-2 fill-none stroke-2 stroke-current ${className}`} viewBox='0 0 24 24' ariaHidden>
    <SVGElement.Path d='M19 9l-7 7-7-7' />
  </SVGElement>
)

export const CloseIcon: FC<HamburgerIconProps> = ({ className, ariaHidden }) => (
  <SVGElement role='img' className={`stroke-gray-400 fill-gray-600 w-6 h-6 ${className}`} ariaHidden={ariaHidden} viewBox='0 0 20 20'>
    <SVGElement.Path d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' />
  </SVGElement>
)

export const HamburgerIcon: FC<HamburgerIconProps> = ({ className, ariaHidden }) => (
  <SVGElement role='img' className={`stroke-gray-400 fill-gray-600 w-6 h-6 ${className}`} ariaHidden={ariaHidden} viewBox='0 0 20 20'>
    <SVGElement.Path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' />
  </SVGElement>
)

export const DropItemIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement role='img' className={className} viewBox='0 0 24 24'>
    <SVGElement.Path d='M18 12H6' />
    <SVGElement.Title title='Drop item' />
  </SVGElement>
)

export const AddItemIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement role='img' className={className} viewBox='0 0 24 24'>
    <SVGElement.Path d='M12 6v12m6-6H6' />
    <SVGElement.Title title='Add item' />
  </SVGElement>
)

export const GithubIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement viewBox='0 0 24 24' role='img' className={className}>
    <SVGElement.Path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
    <SVGElement.Title title='GitHub page' />
  </SVGElement>
)

export const LinkedInIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement viewBox='0 0 24 24' role='img' className={className}>
    <SVGElement.Path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
    <SVGElement.Title title='LinkedIn page' />
  </SVGElement>
)

export const SquareIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement
    viewBox='0 0 24 24'
    role='presentation'
    className={`w-6 h-6 fill-none stroke-2 stroke-current ${className}`}
  >
    <SVGElement.Path d='M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z' />
  </SVGElement>
)

export const LeftArrowIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement viewBox='0 0 24 24' role='button' className={`w-6 h-6 fill-current ${className}`}>
    <SVGElement.Path d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z' />
  </SVGElement>
)

export const RightArrowIcon: FC<IconsProps> = ({ className }) => (
  <SVGElement viewBox='0 0 24 24' role='button' className={`w-6 h-6 fill-current ${className}`}>
    <SVGElement.Path d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z' />
  </SVGElement>
)
