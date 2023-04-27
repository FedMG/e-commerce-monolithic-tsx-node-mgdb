import { useState } from 'react'
import Link from 'next/link'

import { isArrayOfObjects, isString } from '@/utils'
import type { HeaderDropdownProps, HeaderMenuListProps } from 'additional'

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ label, links, selectOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  
  const selectDropdownOption = (): void => {
    setIsDropdownOpen(false)
    selectOption()
    return
  }
  
  return (
    <div className='relative bg-inherit'>
      <button
        aria-label='select an option'
        aria-haspopup='true'
        aria-expanded='false'
        id='dropdownDefaultButton'
        data-dropdown-toggle='dropdown'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className='py-3 px-7 sm:px-12 lg:px-2 lg:py-3 flex items-center bg-inherit hover:bg-gray-300 active:bg-gray-200 w-full block font-sans text-sm xl:text-md font-medium text-gray-700 hover:text-primary-700 border-b border-gray-100 lg:border-0 lg:rounded-md'
        type='button'
      >
        <span>
          {label}
        </span>
        <svg
          className={`w-4 h-4 ml-2 ${isDropdownOpen ? '-rotate-90' : 'rotate-0'}`}
          aria-hidden='true'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>
      <div id='dropdown' role='menu' aria-hidden='true' className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} w-full lg:w-44 bg-inherit absolute top-full left-0 right-0 rounded-lg lg:shadow`}>
        <ul aria-labelledby='dropdownDefaultButton' className=''>
          <HeaderMenuList links={links} selectOption={selectDropdownOption} spacing />
        </ul>
      </div>
    </div>
  )
}

export const HeaderMenuList: React.FC<HeaderMenuListProps> = ({ links, bgColor, selectOption, spacing }) => {
  if (!isArrayOfObjects(links)) return null

  return (
    <>
      {links.map(({ name, path, dropdown }) => {
        if (dropdown != null) {
          return (
            <li key={name} className={`w-full ${isString(bgColor) ? bgColor as string : ''}`}>
              <HeaderDropdown label={name} links={dropdown} selectOption={selectOption} />
            </li>
          )
        }

        return (
          <li key={name} className='w-full bg-inherit hover:bg-gray-300 active:bg-gray-200 lg:rounded-md' onClick={selectOption}>
            <Link
              href={path}
              className='py-3 px-7 sm:px-12 lg:px-2 lg:py-3 block text-gray-700 hover:text-primary-700 text-sm xl:text-md font-medium border-b border-gray-100 lg:border-0'
              aria-current='page'
            >
              <span className={`${spacing === true ? 'pl-4 lg:pl-2 border-l border-gray-300 lg:border-none' : ''} py-1 h-full`}> {name}</span>
            </Link>
          </li>
        )
      })}
    </>
  )
}
