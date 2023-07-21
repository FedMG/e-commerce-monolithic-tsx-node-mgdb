import { Header } from '@/components/templates'

import type { AriaAttributes, FC, ReactElement } from 'react'
import type { BaseComponentProps } from '@/schemas'
import type { DropUndefined } from 'utilities'

interface ProductHeaderArticleProps extends BaseComponentProps {
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
}

export const ProductHeaderArticle: FC<ProductHeaderArticleProps> = ({ children, className, labelledby }): ReactElement => {
  return (
    <Header className={`${className} col-span-2 flex mb-4 sm:mb-6`} labelledlby={labelledby}>
      {children}
    </Header>
  )
}
