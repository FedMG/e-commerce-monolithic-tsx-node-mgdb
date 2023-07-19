import Product from '../models/product.js'

import { StatusCodes } from 'http-status-codes'
import { NotFoundError, BadRequestError } from '../errors/customTypes.js'

import { setProductQuery } from './queries/setProductQuery.js'
import {
  uploadFileToTheCloud,
  updateFileInTheCloud,
  deleteFileInTheCloud
} from '../cloud/controllers.js'

const getAllProducts = async (req, res) => {
  const { text, sort, fields, numFilter, page, limit } = req.query
  const products = await setProductQuery({ text, sort, fields, numFilter, page, limit })

  res.status(StatusCodes.OK).json({ products, numHits: products.length })
}

const createProduct = async (req, res) => {
  const product = new Product({ ...req.body })

  if (!req.file) throw new BadRequestError('image is required.')

  const { buffer } = req.file
  product.image.src = await uploadFileToTheCloud(buffer)
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
  const product = await Product.findOne({ _id: productId })

  if (!product) {
    throw new NotFoundError(`There is not a product with id ${productId}`)
  }

  const secureURL = product.image.src
  await deleteFileInTheCloud(secureURL)
  await Product.deleteOne({ _id: productId })

  res.status(StatusCodes.OK).json({})
}

const updateProduct = async (req, res, next) => {
  const { id: productId } = req.params
  const product = await Product.findOne({ _id: productId })

  if (!product) {
    throw new NotFoundError(`There is not a product with id ${productId}`)
  }

  if (req.file) {
    const secureURL = product.image.src
    const { buffer } = req.file

    product.set({
      image: {
        src: await updateFileInTheCloud(secureURL, buffer)
      }
    })
  }

  product.set({ ...req.body })
  product.save({ runValidators: true })

  res.status(StatusCodes.OK).json({})
}

export {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
}
