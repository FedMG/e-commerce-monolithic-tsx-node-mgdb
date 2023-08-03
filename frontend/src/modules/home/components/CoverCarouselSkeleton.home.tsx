export const CoverCarouselSkeleton = (): JSX.Element => (
  <div className='max-w-full w-full h-[105px] min-[300px]:h-[125px] min-[350px]:h-[145px] min-[400px]:h-[165px] min-[450px]:h-[185px] min-[500px]:h-[205px] min-[550px]:h-[225px] min-[600px]:h-[245px] min-[650px]:h-[265px] min-[700px]:h-[285px] md:h-[340px] select-none'>
    <div
      role='status'
      className='animate-pulse object-scale-down min-w-full w-full h-full flex items-center justify-center rounded bg-gray-300 dark:bg-gray-700'>
      <svg
        className='w-10 h-10 text-gray-200 dark:text-gray-600'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 20 18'>
        <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
      </svg>
      <span className='sr-only'>Loading...</span>
    </div>
  </div>
)
