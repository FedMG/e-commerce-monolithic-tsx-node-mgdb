import type { FC } from 'react'
import type { BaseComponentProps } from '@/schemas'

interface SVGBlobProps extends Pick<BaseComponentProps, 'className'> {
  d: string
}

export const SVGBlob: FC<SVGBlobProps> = ({ className, d }) => (
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    role='img'
    className={className}
  >
    <defs>
      <linearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'>
        <stop
          id='stop1'
          stopColor='rgba(255, 233.954, 141.177, 1)'
          offset='0%'
        />
        <stop
          id='stop2'
          stopColor='rgba(240.272, 98.228, 0.085, 1)'
          offset='0%'
        />
        <stop
          id='stop3'
          stopColor='rgba(255, 233.954, 141.177, 1)'
          offset='100%'
        />
      </linearGradient>
    </defs>
    <path
      d={d}
      fill='url(#sw-gradient)'
      transform='translate(50, 50)'
      width='100%'
      height='100%'
      strokeWidth='0'
    />
  </svg>
)
