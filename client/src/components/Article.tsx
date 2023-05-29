import type { ArticleProps } from 'additional'

export const Article: React.FC<ArticleProps> = ({ children, className, labelledby, describedby }) => (
  <article className={className} aria-labelledby={labelledby} aria-describedby={describedby}>{children}</article>
)
