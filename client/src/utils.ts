export const getPriceWithDiscount = (discount: number | undefined, price: number) => {
  if (!discount || discount === null || discount === undefined) return price;

  const digits = discount.toString().length;
  const divisor = Number(1 + "0".repeat(digits));
  return price - (discount / divisor) * price;
};
