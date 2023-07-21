import Link from 'next/link'

import { List } from '@/components/List'
import { Text } from '@/components/Text'
import { HeaderDropdown } from './HeaderDropdown'

import { isArrayOfObjects, isString } from '@/utils'

// later refactor
interface Links {
  path: string
  name: string
}

type HeaderLinks = Links & { dropdown?: Links[] }

interface HeaderPageProps {
  links: HeaderLinks[]
}

interface HeaderMenuListProps extends HeaderPageProps {
  selectOption: () => void
  bgColor?: string
  spacing?: boolean
}

// later remove all bgColor props
export const HeaderMenuList: React.FC<HeaderMenuListProps> = ({ links, bgColor, selectOption, spacing }) => {
  if (!isArrayOfObjects(links)) return null

  return (
    <>
      {links.map(({ name, path, dropdown }) => {
        if (dropdown != null) {
          return (
            <List.Item ariaCurrent='page' key={name} role='menuitem' className={`w-full ${isString(bgColor) ? bgColor as string : ''}`}>
              <HeaderDropdown label={name} links={dropdown} selectOption={selectOption} />
            </List.Item>
          )
        }

        return (
          <List.ItemEvent key={name} role='menuitem' className='w-full bg-inherit hover:bg-gray-300 active:bg-gray-200 lg:rounded-md' onClick={selectOption}>
            <Link
              href={path}
              className='py-3 px-7 sm:px-12 lg:px-2 lg:py-3 block text-gray-700 hover:text-primary-700 text-sm xl:text-md font-medium border-b border-gray-100 lg:border-0'
              aria-current='page' // later I should convert it to dynamic
            >
              <Text className={`${spacing === true ? 'pl-4 lg:pl-2 border-l border-gray-300 lg:border-none' : ''} py-1 h-full`}> {name}</Text>
            </Link>
          </List.ItemEvent>
        )
      })}
    </>
  )
}
