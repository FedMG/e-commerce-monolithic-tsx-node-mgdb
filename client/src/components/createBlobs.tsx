import { CreateBlockProps } from "additional";

export const CreateBlob: React.FC<CreateBlockProps> = ({
  d,
  className,
  alt,
}) => (
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
          stop-color="rgba(255, 233.954, 141.177, 1)"
          offset="0%"
        ></stop>
        <stop
          id="stop2"
          stop-color="rgba(240.272, 98.228, 0.085, 1)"
          offset="100%"
        ></stop>
      </linearGradient>
    </defs>
    <title>{alt}</title>
    <path
      fill="url(#sw-gradient)"
      d={d}
      width="100%"
      height="100%"
      transform="translate(50 50)"
      stroke-width="0"
    ></path>
  </svg>
);