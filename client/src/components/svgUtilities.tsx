import type { SVGIconProps, SVGPathProps } from "additional"

export const SVGicon: React.FC<SVGIconProps> = ({ children, className }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http www.w3.org/2000/svg"
    >{children}</svg> 
  )
}

export const SVGPath: React.FC<SVGPathProps> = ({ d }) => (
  <path
    fillRule="evenodd"
    d={d}
    clipRule="evenodd"
  ></path>
)
