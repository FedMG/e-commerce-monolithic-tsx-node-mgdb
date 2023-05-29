import { useSwapEvent } from '@/hooks/useSwapEvent'
import { HeartIcon } from './SVGIcons'

import type { HeartProps } from 'additional'

export const Heart: React.FC<HeartProps> = ({ className }): React.ReactElement => {
  const [isLike, handleLikeEvent] = useSwapEvent()
  return <HeartIcon onClick={handleLikeEvent} className={`${className ?? ''} w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 ${isLike ? 'fill-rose-700 stroke-rose-700 hover:fill-rose-600 hover:stroke-rose-600' : 'fill-none stroke-slate-400 hover:stroke-rose-700'} active:scale-90 stroke-2 select-none`} />
}
