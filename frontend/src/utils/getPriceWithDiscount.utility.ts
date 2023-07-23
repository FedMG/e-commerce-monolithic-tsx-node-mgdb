export const getPriceWithDiscount = (discount: number | undefined | null, price: number): number => {
  if (discount === 0 || discount === null || discount === undefined) return price
  return price - (discount / 100) * price
}
