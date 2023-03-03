import Product from "../models/product.js";

import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customTypes.js";

export const getAllBrands = async (req, res) => {
  const brands = await Product.distinct("brand");

  if (!brands) {
    throw NotFoundError("There are not brands");
  }
  res.status(StatusCodes.OK).json({ brands: brands });
};
