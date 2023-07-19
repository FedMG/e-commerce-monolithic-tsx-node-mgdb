import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

import favicon from 'serve-favicon'
import morgan from 'morgan'

import cors from 'cors'
import helmet from 'helmet'
import rateLimiter from 'express-rate-limit'

import cloudinary from 'cloudinary'
import connectDB from './db/connect.js'

import session from './routes/session.js'
import products from './routes/products.js'
import covers from './routes/covers.js'

import notFound from './middleware/notFound.js'
import errorHandler from './middleware/errorHandler.js'
import { ServiceUnvailableError } from './errors/customTypes.js'

import { VALID_DOMAIN } from './environment.js'

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
  api_secret: process.env.API_SECRET,
  secure: true
})

const corsConfig = {
  origin: [`https://${VALID_DOMAIN}`],
  optionsSuccessStatus: StatusCodes.OK
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(favicon(path.join(__dirname, '../public', 'e-cart.ico')))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors(corsConfig))
app.use(helmet())

app.use('/', express.static(path.join(__dirname, '../public')))
app.use('/api/v1/auth', session)
app.use('/api/v1/products', products)
app.use('/api/v1/covers', covers)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.SERVER_PORT || 3005
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`Listening port ${PORT}...`))
  } catch (error) {
    throw new ServiceUnvailableError('The service connection has failed')
  }
}

start()
