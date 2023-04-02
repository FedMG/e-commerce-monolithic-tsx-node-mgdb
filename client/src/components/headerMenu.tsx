import { FC, useState } from "react"
import Link from "next/link"

import { isArrayOfObjects } from "@/utils"
import type { HeaderDropdownProps, HeaderProps } from "additional"


const HeaderDropdown: FC<HeaderDropdownProps> = ({ label, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className='flex w-full block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
        type="button"
      >
        <span className='font-sans font-medium text-gray-700'>
          {label}
        </span>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div id="dropdown" className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <HeaderMenuList links={links} />
        </ul>
      </div>
    </div>
  )
}


export const HeaderMenuList: React.FC<HeaderProps> = ({ links }) => {
  if (!isArrayOfObjects(links)) return null

  return (
    <>
      {links.map(({ name, path, dropdown }) => {
        if (dropdown) {
          return (
              <li key={name}>
                <HeaderDropdown label={name} links={dropdown } />
            </li>
          )
        }
        return (
          <li key={name}>
            <Link
              href={path}
              className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
              aria-current="page"
            >
              {name}
            </Link>
          </li>
        )
      })}
    </>
  )
}
