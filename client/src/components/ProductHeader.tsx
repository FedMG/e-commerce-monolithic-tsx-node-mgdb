import { Header } from './Header'
import type { ProductHeaderProps } from 'additional'

export const ProductHeader: React.FC<ProductHeaderProps> = ({ children, className, labelledby }): React.ReactElement => {
  return (
    <Header className={`${className} col-span-2 flex mb-4 sm:mb-6`} labelledlby={labelledby}>
      {children}
    </Header>
  )
}
