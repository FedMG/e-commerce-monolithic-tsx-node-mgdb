import express from 'express'
import { login, register } from '../controllers/session.js'
const router = express.Router()
 
// later add oauth and possibility to change password
router.post('/register', register)
router.post('/login', login)

export default router
