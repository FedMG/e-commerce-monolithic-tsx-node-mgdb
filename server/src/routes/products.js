import express from 'express'
import multer from 'multer'

import authenticateUser from '../middleware/authentication.js'

import {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct
} from '../controllers/products.js'
import { getAllCategories } from '../controllers/productCategories.js'
import { getAllDiscounts } from '../controllers/productDiscounts.js'
import { getAllBrands } from '../controllers/productBrands.js'
import { getImage } from '../controllers/productImage.js'

const upload = multer({ storage: multer.memoryStorage() })
const router = express.Router()

router.route('/').get(getAllProducts).post(authenticateUser, upload.single('image'), createProduct)
router.route('/categories').get(getAllCategories)
router.route('/:category/discounts').get(getAllDiscounts)
router.route('/brands').get(getAllBrands)
router.route('/:id/image').get(getImage)
router.route('/:id').get(getProduct).delete(authenticateUser, deleteProduct).patch(authenticateUser, upload.single('image'), updateProduct)

export default router
