import Product from '../models/product.js'

import { validationResult } from 'express-validator'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/customTypes.js'

export const getAllDistinctByCategory = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: errors.array() })
  }
  
  const { category: productCategory, distinct } = req.params
  console.log(productCategory, distinct)
  
  if (!distinct || !productCategory) {
    throw BadRequestError('The distinct and category parameters has not been provided.')
  }
  
  const uniqueValues = await Product.distinct(distinct, { category: productCategory })
  
  if (!uniqueValues) {
    throw NotFoundError(`There are not brands available in ${productCategory}`)
  }
  
  res.status(StatusCodes.OK).json({ uniqueValues })
}
