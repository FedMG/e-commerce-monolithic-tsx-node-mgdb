import { useState } from "react"
import Link from "next/link"

import { isArrayOfObjects } from "@/utils"
import type { HeaderDropdownProps, HeaderProps } from "additional"


const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ label, links }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  return (
    <div className="relative bg-inherit">
      <button
        aria-label="select an option"
        aria-haspopup="true"
        aria-expanded='false'
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className='py-3 px-5 lg:px-2 lg:py-3 flex items-center bg-inherit hover:bg-gray-300 active:bg-gray-200 w-full block font-sans text-sm xl:text-md font-medium text-gray-700 hover:text-primary-700 border-b border-gray-100 lg:border-0 lg:rounded-md'
        type="button"
      >
        <span>
          {label}
        </span>
        <svg
           className={`w-4 h-4 ml-2 ${isDropdownOpen ? '-rotate-90' : 'rotate-0'}`}
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
      <div id="dropdown" role="menu" aria-hidden="true" className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} w-full lg:w-44 bg-inherit absolute top-full left-0 right-0 max-h-calc rounded-lg lg:shadow`}>
        <ul aria-labelledby="dropdownDefaultButton" className='pl-2 lg:pl-0'>
         <HeaderMenuList links={links} />
        </ul>
      </div>
    </div>
  )
}


export const HeaderMenuList: React.FC<HeaderProps> = ({ links, bgColor }) => {
  if (!isArrayOfObjects(links)) return null

  return (
    <>
      {links.map(({ name, path, dropdown }) => {
        if (dropdown) {
          return (
            <li key={name} className={`w-full ${bgColor}`}>
              <HeaderDropdown label={name} links={dropdown} />
            </li>
          )
        }

        return (
           <li key={name} className='w-full bg-inherit hover:bg-gray-300 active:bg-gray-200 lg:rounded-md'>
           <Link href={path}
               className='py-3 px-5 lg:px-2 lg:py-3 block text-gray-700 hover:text-primary-700 text-sm xl:text-md font-medium border-b border-gray-100 lg:border-0'
             aria-current="page" // implement later the logic to apply aria-current dynamicly
            >
              {name}
            </Link>
          </li>
        )
      })}
    </>
  )
}
