import type { ProductButtonProps } from 'additional'

export const ProductButton: React.FC<ProductButtonProps> = ({ children, name }) => {
  return (
  <button
  type='button'
  className='md:px-5 md:py-3 px-4 py-3 mr-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none active:bg-blue-600 font-medium rounded-lg text-sm md:text-md lg:text-lg text-center inline-flex items-center justify-center'>
  {children}{name}
  </button>
  )
}
