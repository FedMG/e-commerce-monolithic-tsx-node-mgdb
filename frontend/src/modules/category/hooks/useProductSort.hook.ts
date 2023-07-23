import { useMemo, useState } from "react"
import type { ProductCard } from "@/models"
import { SortBy } from "../enums"

type ProductSortFunction = (a: ProductCard, b: ProductCard) => number
type SortMethods = Record<string, ProductSortFunction>

const sortMethods: SortMethods = {
  [SortBy.DATE]: (a, b) => {
    const dateOfA = new Date(a.createdAt).getTime()
    const dateOfB = new Date(b.createdAt).getTime()
    return dateOfA - dateOfB
  },
  [SortBy.RATING]: (a, b) => b.rating?.stars - a.rating?.stars,
  [SortBy.PRICE]: (a, b) => a.price - b.price
}

export const useProductSort = (products: ProductCard[]) => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.RATING)
  const sortedProducts = useMemo(() => [...products].sort(sortMethods[sortBy]), [sortBy, products])
  
  const updateSortBy = (sortType: SortBy): void => setSortBy(sortType)
  return { sortBy, updateSortBy, sortedProducts }
}
