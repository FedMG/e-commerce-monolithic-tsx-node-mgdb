import { Header } from './Header'
import type { ProductHeaderArticleProps } from 'additional'

export const ProductHeaderArticle: React.FC<ProductHeaderArticleProps> = ({ children, className, labelledby }): React.ReactElement => {
  return (
    <Header className={`${className} col-span-2 flex mb-4 sm:mb-6`} labelledlby={labelledby}>
      {children}
    </Header>
  )
}
