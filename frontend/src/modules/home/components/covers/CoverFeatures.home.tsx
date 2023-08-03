import type { BaseComponentProps } from '@/schemas'

export const TextContainer: React.FC<BaseComponentProps> = ({ className, children }) => (
  <p
    className={`text-slate-50 font-semibold text-xs min-[365px]:text-sm min-[400px]:text-md min-[450px]:text-lg min-[500px]:text-xl sm:text-2xl md:text-3xl lg:text-4xl drop-shadow-black rounded-lg p-1 ${className} flex flex-col`}>
    {children}
  </p>
)

export const BadgeUpTo: React.FC<BaseComponentProps> = ({ children, className }) => (
  <span>
    Up to{' '}
    <span
      className={`font-extrabold capitalize bg-stone-100 px-1 rounded-2xl ${className}`}>
      {children}
    </span>
  </span>
)

export const OnProducts: React.FC<BaseComponentProps> = ({ children, className }) => (
  <span>
    on
    <span className={className}> {children} </span>
    products
  </span>
)
