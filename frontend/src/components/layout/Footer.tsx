import { GithubIcon, LinkedInIcon } from '@/assets'
import { isArrayOfObjects } from '@/utils'

interface FooterLinkItem {
  name: string
  path: string
}

export type FooterLinks = FooterLinkItem & { links?: FooterLinkItem[] }

export interface FooterProps {
  links: FooterLinks[]
}

export interface FooterLinkProps {
  children: React.ReactNode
  href: string
}


// later refactor all this code
const FooterLink: React.FC<FooterLinkProps> = ({ children, href = '#' }) => (
  <a href={href} className='w-full h-full max-h-[35px] max-w-[35px] text-white hover:bg-gray-50 hover:text-black p-1 rounded-md active:bg-black active:text-white'>
    {children}
  </a>
)

const FooterColumnLinks: React.FC<FooterProps> = ({ links }) => {
  if (!isArrayOfObjects(links)) return null
  return (
    <>
      {links.map(({ name, path, links }) => {
        if (links != null) {
          return (
            <div className='px-8 py-2 inline-block' key={name}>
              <h2 className='mb-4 text-lg font-bold font-sans text-gray-900'>
                {name}
              </h2>
              <ul>
                <FooterColumnLinks links={links} />
              </ul>
            </div>
          )
        }
        return (
          <li key={name} className='pb-3 text-md font-medium text-gray-600'>
            <a href={path} className='hover:underline'>
              {name}
            </a>
          </li>
        )
      })}
    </>
  )
}

const CopyrightAndSocialIcons = (): React.ReactElement => (
  <div className='py-8 px-14 sm:px-10 lg:px-16 xl:px-24 mt-5 w-full bg-black flex flex-col sm:flex-row space-around items-center border-t border-gray-200'>
    <p className='text-sm text-white sm:w-full sm:order-none order-2'>
      © 2023 AstraShop™. Copyright.
    </p>
    <div className='flex flex-nowrap sm:justify-end justify-center gap-0 space-x-2 mb-4 w-full sm:my-0 sm:order-none order-1'>
      <FooterLink href='https://www.linkedin.com/in/federico-gonzalia/'>
        <LinkedInIcon className='fill-current' />
      </FooterLink>
      <FooterLink href='https://github.com/FedMG'>
        <GithubIcon className='fill-current' />
      </FooterLink>
    </div>
  </div>
)

export const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className='absolute top-full w-full bg-gray-100 border-t border-gray-200'>
      <div className='mt-5 hidden sm:flex w-full justify-around'>
        <FooterColumnLinks links={links} />
      </div>
      <CopyrightAndSocialIcons />
    </footer>
  )
}
