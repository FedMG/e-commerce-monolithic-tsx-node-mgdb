import { Text } from './Text'
import type { ProductBrandLogoProps } from 'additional'

export const ProductBrandLogo: React.FC<ProductBrandLogoProps> = ({ children, className }) => (
  <div className={`hidden sm:flex items-center pb-[3px] px-3 leading-tight align-middle ${className}`}>
    <Text.Gradient from='from-slate-500' via='via-slate-400' to='to-slate-600'>{children}</Text.Gradient>
  </div>
)
