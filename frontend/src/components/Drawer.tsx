import { FC, ReactElement, ReactNode, useState } from 'react'

interface DrawerProps {
  width?: string
  bgColor?: string
  children: ReactNode
}

interface DrawerContainerProps extends Pick<DrawerProps, 'children'> {
  onClick: () => void
}

const DrawerContainer: FC<DrawerContainerProps> = ({ children, onClick }) => (
  <div className='relative flex justify-center items-center lg:block'>
    <button
      onClick={onClick}
      className='block lg:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md border'
    >
      Filters
    </button>
    {children}
  </div>
)

export const Drawer: FC<DrawerProps> = ({
  width = 'w-64',
  bgColor = 'bg-gray-100',
  children
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = (): void => setIsOpen(!isOpen)

  if (isOpen) {
    return (
      <DrawerContainer onClick={toggleDrawer}>
        <div
          className='block lg:hidden fixed inset-y-0 z-50 top-0 left-0 right-0 h-screen w-full bg-gray-700 opacity-50'
          onClick={() => setIsOpen(!isOpen)}
        />
        <div
          className={`block lg:hidden overflow-y-auto left-0 border-r z-50 ${bgColor} ${width} fixed inset-y-0 transition-transform duration-[300ms] ease-in-out transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='pt-20 py-4 px-4'>
            <span className='sr-only block text-lg font-bold'>Filters</span>
            <div className='space-y-2'>{children}</div>
          </div>
        </div>
      </DrawerContainer>
    )
  }

  return (
    <DrawerContainer onClick={toggleDrawer}>
      <div className='hidden lg:block space-y-4'>{children}</div>
    </DrawerContainer>
  )
}
