import express from 'express'
import {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
} from '../controllers/products.js'
import { getAllCategories } from '../controllers/productCategories.js'
import { getAllBrands } from '../controllers/productBrands.js'

const router = express.Router()
router.route('/').get(getAllProducts).post(createProduct)
router.route('/categories').get(getAllCategories)
router.route('/brands').get(getAllBrands)
router.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct)

export default router
