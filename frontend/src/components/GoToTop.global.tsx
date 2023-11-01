import { ArrowUpIcon } from '@/assets'

export const GoToTop = ({ href }: { href: string }) => (
  <div className='z-20 fixed bottom-[5%] right-[5%] bg-gray-100 rounded-full shadow border flex items-center justify-center w-16 h-16'>
    <a href={href} className='p-4'>
      <ArrowUpIcon />
    </a>
  </div>
)
