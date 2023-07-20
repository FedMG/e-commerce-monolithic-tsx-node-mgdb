import { GreaterThanIcon, HomeIcon } from '@/components/SVGIcons'
import { Navigation } from '@/components/Navigation'
import { LinkButton } from '@/components/LinkButton'
import { List } from '@/components/List'
import { Text } from '@/components/Text'

import type { Product } from 'additional'
import type { BaseComponentProps } from '@/schemas'

type ProductBreadCrumbProps = Pick<Product, 'category' | 'brand' | 'name'> & Pick<BaseComponentProps, 'className'>

export const ProductBreadCrumbs: React.FC<ProductBreadCrumbProps> = ({ className, category, brand, name }) => (
  <Navigation className={`flex-1 flex h-full p-4 ${className}`} ariaLabel='Breadcrumb navigation'>
    <List id='breadcrumb-options' role='menu' ariaHidden={false} className='inline-flex items-center space-x-1 md:space-x-3'>

      <List.Item role='menuitem' ariaCurrent={false} className='flex items-center'>
        <LinkButton href='/' ariaLabel='Go to Homepage' className='inline-flex items-center hover:text-blue-600'>
          <HomeIcon />
          Home
        </LinkButton>
      </List.Item>

      <GreaterThanIcon />
      <List.Item role='menuitem' ariaCurrent={false} className='flex items-center'>
        <LinkButton ariaLabel={`Go to ${category} page`} href={`/${category}`} className='hover:text-blue-600'>
          <Text className='hidden md:inline-block'>Products /</Text>{' '}{category}
        </LinkButton>
      </List.Item>

      <GreaterThanIcon />
      <List.Item role='menuitem' ariaCurrent='page' className='flex items-center'>
        <Text className=' text-gray-500 max-w-[8em] md:max-lg:max-w-[10em] lg:max-w-[16em] truncate overflow-hidden'>
          <Text className='hidden md:inline-block'>{brand} /</Text>{' '}
          <Text className='hidden sm:inline-block'>{name}</Text>
          <Text className='sm:hidden'>Item</Text>
        </Text>
      </List.Item>
    </List>
  </Navigation>
)
