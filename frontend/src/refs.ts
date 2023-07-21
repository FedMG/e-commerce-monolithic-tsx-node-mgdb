import { ProductColors } from 'enums'

export const productColor: Record<ProductColors, string> = Object.freeze({
  [ProductColors.ROSE_500]: 'bg-rose-500',
  [ProductColors.ORANGE_600]: 'bg-orange-600',
  [ProductColors.YELLOW_400]: 'bg-yellow-400',
  [ProductColors.LIME_400]: 'bg-lime-400',
  [ProductColors.GREEN_600]: 'bg-green-600',
  [ProductColors.CYAN_600]: 'bg-cyan-600',
  [ProductColors.VIOLET_600]: 'bg-violet-600',
  [ProductColors.FUCHSIA_500]: 'bg-fuchsia-500 ',
  [ProductColors.PINK_600]: 'bg-pink-600',
  [ProductColors.NEUTRAL_900]: 'bg-neutral-900',
  [ProductColors.STONE_600]: 'bg-stone-600',
  [ProductColors.SLATE_900]: 'bg-slate-900',
  [ProductColors.WHITE]: 'bg-white',
  [ProductColors.BLACK]: 'bg-black'
})

export const filterStructure = {
  name: null,
  brand: null,
  discount: null
}
