import type { CreateBlobProps, SVGPathProps } from "additional"

export const SVGBlobPath: React.FC<SVGPathProps> = ({ d }) => ( 
  <path
    d={d}
    fill="url(#sw-gradient)"
    transform="translate(50, 50)"
    width='100%'
    height='100%'
    strokeWidth="0"
  />
)

export const CreateBlob: React.FC<CreateBlobProps> = ({ children, className }) => (
  <svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    role="img"
    className={className}
  >
    <defs>
      <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop
          id="stop1"
          stopColor="rgba(255, 233.954, 141.177, 1)"
          offset="0%"
        ></stop>
        <stop
          id="stop2"
          stopColor="rgba(240.272, 98.228, 0.085, 1)"
          offset="0%"
        ></stop>
        <stop
          id="stop3"
          stopColor="rgba(255, 233.954, 141.177, 1)"
          offset="100%"
        ></stop>
      </linearGradient>
    </defs>
    <title>An abstract orange shape for decoration</title>
    {children}
  </svg>
)
