import { Product } from "additional"

export const getPriceWithDiscount = (discount: number | undefined, price: number) => {
  if (!discount || discount === null || discount === undefined) return price;
  return price - (discount / 100) * price;
};


export const isThereProduct = (products: Product[]) =>
  Array.isArray(products) && products.length > 0;
