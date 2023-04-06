import express from 'express'
import multer from 'multer'

import { validateParams } from '../middleware/request-validators.js'
import authenticateUser from '../middleware/authentication.js'
import requiredAPIKey from '../middleware/apiKeyAuth.js'

import {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
} from '../controllers/products.js'
import { getAllCategories } from '../controllers/productCategories.js'
import { getAllDistinctByCategory } from '../controllers/productDistinctByCategory.js'
import { getImage } from '../controllers/productImage.js'

const upload = multer({ storage: multer.memoryStorage() })
const router = express.Router()

// later add more parameters and query validators
router.route('/').get(getAllProducts).post(authenticateUser, requiredAPIKey, upload.single('image'), createProduct)
router.route('/categories').get(getAllCategories)
router.route('/:category/:distinct').get(validateParams, getAllDistinctByCategory)
router.route('/:id/image').get(getImage)
router.route('/:id').get(getProduct).delete(authenticateUser, requiredAPIKey, deleteProduct).patch(authenticateUser, requiredAPIKey, upload.single('image'), updateProduct)

export default router
