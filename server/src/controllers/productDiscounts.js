import Product from '../models/product.js'

import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customTypes.js'

export const getAllDiscounts = async (req, res) => {
  const { category: productCategory } = req.params
  const discounts = await Product.distinct('discount', { category: productCategory })

  if (!discounts) {
    throw NotFoundError(`There are not discounts in ${productCategory}`)
  }
  
  res.status(StatusCodes.OK).json({ discounts })
}
