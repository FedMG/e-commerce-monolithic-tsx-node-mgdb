import Product from '../models/product.js'

import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customTypes.js'

export const getAllColors = async (req, res) => {
  const colors = await Product.distinct('colors')

  if (!colors) {
    throw NotFoundError('There are not categories')
  }
  res.status(StatusCodes.OK).json({ colors })
}
