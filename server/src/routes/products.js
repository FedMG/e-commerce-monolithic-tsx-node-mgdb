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
import { getImage } from '../controllers/productImage.js'

import multer from 'multer'

const upload = multer({ storage: multer.memoryStorage() })

const router = express.Router()

router.route('/').get(getAllProducts).post(upload.single('image'), createProduct)
router.route('/categories').get(getAllCategories)
router.route('/brands').get(getAllBrands)
router.route('/:id/image').get(getImage)
router.route('/:id').get(getProduct).delete(deleteProduct).patch(upload.single('image'), updateProduct)

export default router
