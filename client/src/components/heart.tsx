import { useState } from "react"

export const Heart = () => {
  const [isLike, setLike] = useState<boolean>(false)
  
  return (
    <svg onClick={() => setLike(!isLike)} className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 ${isLike === true ? 'fill-rose-700 stroke-rose-700 hover:stroke-rose-600 hover:fill-rose-600' : 'fill-none stroke-2 stroke-slate-400 hover:stroke-rose-700'} select-none`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}
