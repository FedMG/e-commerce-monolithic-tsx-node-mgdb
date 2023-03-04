import Product from '../models/product.js'

import { StatusCodes } from 'http-status-codes'
import { NotFoundError, BadRequestError } from '../errors/customTypes.js'

import { createQuery } from './validators/createQuery.js'
import { uploadImageToTheCloud } from '../cloud/controllers.js'

const getAllProducts = async (req, res) => {
  const { name, brand, category, sort, fields, numFilter, page, limit } =
    req.query

  const products = await createQuery({
    name,
    brand,
    category,
    sort,
    fields,
    numFilter,
    page,
    limit
  })

  res.status(StatusCodes.OK).json({ products, numHits: products.length })
}

const createProduct = async (req, res) => {
  const product = new Product({ ...req.body })

  if (!req.file) throw new BadRequestError('image is required.')

  const { buffer } = req.file
  const image = `data:image/jpg;base64,${buffer.toString('base64')}`

  product.image.src = await uploadImageToTheCloud(image)
  product.save()

  res.status(StatusCodes.CREATED).json({ product })
}

const getProduct = async (req, res, next) => {
  const { id: productId } = req.params
  const product = await Product.findOne({ _id: productId })

  if (!product) {
    throw new NotFoundError(`There is not a product with id ${productId}`)
  }

  res.status(StatusCodes.OK).json({ product })
}

const deleteProduct = async (req, res, next) => {
  const { id: productId } = req.params
  const product = await Product.findOneAndDelete({ _id: productId })

  if (!product) {
    throw new NotFoundError(`There is not a product with id ${productId}`)
  }
  res.status(StatusCodes.OK).json({ product })
}

const updateProduct = async (req, res, next) => {
  const { id: productId } = req.params
  const product = await Product.findOne({ _id: productId })

  if (!product) {
    throw new NotFoundError(`There is not a product with id ${productId}`)
  }

  res.status(StatusCodes.OK).json({})
}

export {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
}
