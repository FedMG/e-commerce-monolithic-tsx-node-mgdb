import express from 'express'
import {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
} from '../controllers/products.js'

const router = express.Router()
router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct)

export default router
