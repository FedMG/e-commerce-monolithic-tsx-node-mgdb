import { useSwapEvent } from '@/hooks'
import { HeaderMenuList } from './HeaderMenuList'
import { DropdownButton } from './DropdownButtons'
import { List, Text } from '@/components'
import { DownArrowIcon } from '@/assets'

// later refactor
interface Links {
  path: string
  name: string
}

type HeaderLinks = Links & { dropdown?: Links[] }

interface HeaderPageProps {
  links: HeaderLinks[]
}

interface HeaderDropdownProps extends HeaderPageProps {
  selectOption: () => void
  label: string
}

export const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ label, links, selectOption }) => {
  const [isDropdownOpen, openDropdown] = useSwapEvent()

  // later find out a way to refactor this, maybe by using a reducer or remaking the two committed components to avoid passed a another handlerState through the props
  const selectDropdownOption = (): void => {
    openDropdown() // fix: must be always false to avoid re open hamburgerDropdown
    selectOption()
  }

  return (
    <div className='relative bg-inherit'>
      <DropdownButton
        ariaLabel='Select an option'
        ariaHaspopup='menu'
        ariaExpanded={isDropdownOpen}
        labelledby='dropdown-menu'
        onClick={openDropdown}
        className='py-3 px-7 sm:px-12 lg:px-2 lg:py-3 flex items-center bg-inherit hover:bg-gray-300 active:bg-gray-200 active:rounded-md w-full text-gray-700 hover:text-primary-700 border-b border-gray-100 lg:border-0 lg:rounded-md'
      >
        <Text className='font-sans text-sm xl:text-md font-medium'>{label}</Text>
        <DownArrowIcon className={isDropdownOpen ? '-rotate-90' : 'rotate-0'} />
      </DropdownButton>

      <List id='dropdown-menu' role='menu' ariaHidden={!isDropdownOpen} className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} w-full lg:w-44 bg-inherit absolute top-full left-0 right-0 rounded-lg lg:shadow`}>
        <HeaderMenuList links={links} selectOption={selectDropdownOption} spacing />
      </List>
    </div>
  )
}
