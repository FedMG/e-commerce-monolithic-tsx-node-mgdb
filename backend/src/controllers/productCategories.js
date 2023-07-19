import Product from '../models/product.js'

import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customTypes.js'

export const getAllCategories = async (req, res) => {
  const categories = await Product.distinct('category')

  if (!categories) {
    throw NotFoundError('There are not categories')
  }
  res.status(StatusCodes.OK).json({ categories })
}
