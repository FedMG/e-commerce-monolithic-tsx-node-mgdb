import { StatusCodes } from 'http-status-codes'
import 'express-async-errors'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import connectDB from './db/connect.js'
import authenticateUser from './middleware/authentication.js'

import session from './routes/session.js'
import products from './routes/products.js'

import notFound from './middleware/notFound.js'
import errorHandler from './middleware/errorHandler.js'

const corsConfig = {
  origin: ['https://ek5sqy-3000.preview.csb.app'],
  optionsSuccessStatus: StatusCodes.OK
}

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors(corsConfig))

app.use('/api/v1/auth', session)
app.use('/api/v1/products', authenticateUser, products)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3005
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`Listening port ${PORT}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
