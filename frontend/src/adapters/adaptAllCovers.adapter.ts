import type { Cover, CoversResponse } from '@/models/cover.model'

export const adaptAllCovers = (response: CoversResponse): Cover[] => {
  const { covers } = response

  return covers.map(({ _id, image, category, alt, brand, discount }) => ({
    id: _id,
    image,
    category,
    alt,
    brand,
    discount
  }))
}
