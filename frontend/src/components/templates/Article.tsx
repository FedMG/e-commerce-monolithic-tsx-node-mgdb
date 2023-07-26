import type { AriaAttributes } from 'react'
import type { DropUndefined } from '@/utilities'
import type { BaseComponentProps } from '@/schemas'

type ArticleProps = BaseComponentProps & {
  labelledby: DropUndefined<AriaAttributes, 'aria-labelledby'>
  describedby: DropUndefined<AriaAttributes, 'aria-describedby'>
}

export const Article: React.FC<ArticleProps> = ({ children, className, labelledby, describedby }) => (
  <article className={className} aria-labelledby={labelledby} aria-describedby={describedby}>{children}</article>
)
