import Product from '../models/product.js'

import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '../errors/customTypes.js'

export const getImage = async (req, res) => {
  const { id: productId } = req.params
  const product = await Product.findOne({ _id: productId })

  if (!product) {
    throw new NotFoundError(`There is not a product with id ${productId}`)
  }

  res.status(StatusCodes.OK).send(product.image)  
}
