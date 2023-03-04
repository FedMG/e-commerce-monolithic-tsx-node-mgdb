import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

import express from 'express'
import morgan from 'morgan'

import cors from 'cors'
import helmet from 'helmet'
import rateLimiter from 'express-rate-limit'

import cloudinary from 'cloudinary'

import connectDB from './db/connect.js'
import authenticateUser from './middleware/authentication.js'

import session from './routes/session.js'
import products from './routes/products.js'

import notFound from './middleware/notFound.js'
import errorHandler from './middleware/errorHandler.js'
import { ServiceUnvailableError } from './errors/customTypes.js'

const app = express()

app.set('trust proxy', 1)
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100
  })
)

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

const corsConfig = {
  origin: ['https://ek5sqy-3000.preview.csb.app'],
  optionsSuccessStatus: StatusCodes.OK
}

app.use(express.json())
app.use(morgan('dev'))
app.use(cors(corsConfig))
app.use(helmet())

app.use('/api/v1/auth', session)
app.use('/api/v1/products', authenticateUser, products)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.SEVER_PORT || 3005
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`Listening port ${PORT}...`))
  } catch (error) {
    throw ServiceUnvailableError('The service connection has failed')
  }
}

start()
