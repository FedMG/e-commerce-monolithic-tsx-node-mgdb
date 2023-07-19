import express from 'express'
import multer from 'multer'

import requiredAPIKey from '../middleware/apiKeyAuth.js'

import {
  getAllCovers,
  createCover,
  getCover,
  deleteCover,
  updateCover
} from '../controllers/covers.js'

const upload = multer({ storage: multer.memoryStorage() })
const router = express.Router()

// later add more parameters and query validators
router.route('/').get(getAllCovers).post(requiredAPIKey, upload.single('image'), createCover)
router.route('/:id').get(getCover).delete(requiredAPIKey, deleteCover).patch(requiredAPIKey, upload.single('image'), updateCover)

export default router
