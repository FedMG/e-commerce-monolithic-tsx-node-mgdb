import Link from 'next/link'
import { SVGElement, PathElement } from '@/components/svgElements'

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
            <SVGElement className='w-4 h-4 mr-2' fillCurrent>
              <PathElement d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
            </SVGElement>
            Home
          </Link>
        </li>
        <li>
          <div className='flex items-center'>
            <SVGElement className='w-6 h-6 text-gray-400' fillCurrent>
              <PathElement d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' />
            </SVGElement>
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
            <SVGElement className='w-6 h-6 text-gray-400' fillCurrent>
              <PathElement d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' />
            </SVGElement>
            <span className='ml-1 text-sm md:text-md font-medium text-gray-500 md:ml-2 max-w-[8em] md:max-w-[10em] lg:max-w-[16em] truncate overflow-hidden'>
              <span className='hidden md:inline-block'>{setUpperCase(brand)} /</span>{' '}
              {setUpperCase(name)}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  )
}
