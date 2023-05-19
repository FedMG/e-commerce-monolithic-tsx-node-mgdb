import Link from 'next/link'

import { GreaterThanIcon, HomeIcon } from './SVGIcons'
import { setUpperCase } from '@/utils'

import type { Product } from 'additional'

export const BreadCrumbs: React.FC<Pick<Product, 'category' | 'brand' | 'name'>> = ({ category, brand, name }) => {
  return (
    <nav className='flex h-full' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <Link
            href='/'
            className='inline-flex items-center text-sm md:text-md font-medium text-gray-700 hover:text-blue-600'
          >
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <div className='flex items-center'>
            <GreaterThanIcon />
            <Link
              href={`/${category}`}
              className='ml-1 text-sm md:text-md font-medium text-gray-700 hover:text-blue-600 md:ml-2'
            >
              <span className='hidden md:inline-block'>Products /</span>{' '}{setUpperCase(category)}
            </Link>
          </div>
        </li>
        <li aria-current='page'>
          <div className='flex items-center'>
            <GreaterThanIcon />
            <span className='ml-1 text-sm md:text-md font-medium text-gray-500 md:ml-2 max-w-[8em] md:max-w-[10em] lg:max-w-[16em] truncate overflow-hidden'>
              <span className='hidden md:inline-block'>{setUpperCase(brand)} /</span>{' '}
              <span className='hidden sm:inline-block'> {setUpperCase(name)}</span>
              <span className='sm:hidden'>Item</span>
            </span>
          </div>
        </li>
      </ol>
    </nav>
  )
}
