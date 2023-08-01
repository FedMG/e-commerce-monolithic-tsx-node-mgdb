import type { ProductCard } from "@/models"

type ApplyDiscountParam = Pick<ProductCard, 'price' | 'discount'>

export const applyDiscount = ({ discount, price }: ApplyDiscountParam): number => {
  if(!discount) return price
  const result = price - (discount / 100) * price
  return Math.round(result)
}
