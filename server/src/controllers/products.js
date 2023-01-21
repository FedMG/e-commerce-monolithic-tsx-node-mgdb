import Product from '../models/product.js'

import { createQuery } from './validators/createQuery.js'
import { createError } from '../errors/create-error.js'

const getAllProducts = async (req, res) => {
  const {
    featured,
    name,
    brand,
    category,
    sort,
    fields,
    numFilter,
    page,
    limit
  } = req.query

  const products = await createQuery({
    featured,
    name,
    brand,
    category,
    sort,
    fields,
    numFilter,
    page,
    limit
  })

  res.status(200).json({ products, numHits: products.length })
}

const createProduct = async (req, res) => {
  const product = await Product.create(req.body)
  res.status(201).json({ product })
}

const getProduct = async (req, res, next) => {
  const { id: productId } = req.params
  const product = await Product.findOne({ _id: productId })

  if (!product) {
    return next(createError(`There is not a product with id ${productId}`, 404))
  }

  res.status(200).json({ product })
}

const deleteProduct = async (req, res, next) => {
  const { id: productId } = req.params
  const product = await Product.findOneAndDelete({ _id: productId })

  if (!product) {
    return next(createError(`There is not a product with id ${productId}`, 404))
  }
  res.status(200).json({ product })
}

const updateProduct = async (req, res, next) => {
  const { id: productId } = req.params

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true
  })

  if (!product) {
    return next(createError(`There is not a product with id ${productId}`, 404))
  }

  res.status(200).json({})
}

export {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
}
