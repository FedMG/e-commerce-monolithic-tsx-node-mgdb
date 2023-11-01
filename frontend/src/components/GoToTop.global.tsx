import { ArrowUpIcon } from '@/assets'

export const GoToTop = ({ href }: { href: string }) => (
  <div className='sticky bottom-[10%] right-[10%] p-4 rounded-full shadow border flex items-center justify-center w-16 h-16'>
    <a href={href}>
      <ArrowUpIcon />
    </a>
  </div>
)
