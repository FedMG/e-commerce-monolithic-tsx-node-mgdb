import {
  type CoverLayout,
  FirstCover,
  SecondCover,
  ThirdCover,
  FifthCover,
  FourthCover
} from './CoverLayouts.home'

type CoverInstances = {
  [key: number]: ({ category, brand, discount }: CoverLayout['props']) => JSX.Element
}

export const CoverInstances: CoverInstances = {
  0: ({ category, brand, discount }: CoverLayout['props']) => (
    <FirstCover
      props={{ category, brand, discount }}
      highlight='font-extrabold capitalize text-red-700'
    />
  ),
  4: ({ category, brand, discount }: CoverLayout['props']) => (
    <SecondCover
      props={{ category, brand, discount }}
      highlight='font-extrabold capitalize text-blue-950	drop-shadow-[0_0.8px_1.3px_rgba(250,253,250,0.8)]'
    />
  ),
  3: ({ category, brand, discount }: CoverLayout['props']) => (
    <ThirdCover
      props={{ category, brand, discount }}
      highlight='font-extrabold capitalize text-neutral-900 drop-shadow-white'
    />
  ),
  1: ({ category, brand, discount }: CoverLayout['props']) => (
    <FourthCover
      props={{ category, brand, discount }}
      highlight='font-extrabold capitalize text-yellow-400'
    />
  ),
  2: ({ category, brand, discount }: CoverLayout['props']) => (
    <FifthCover
      props={{ category, brand, discount }}
      highlight='font-extrabold capitalize text-orange-600'
    />
  )
}
