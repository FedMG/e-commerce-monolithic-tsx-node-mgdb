import { StatusCodes } from 'http-status-codes'
import { CustomError } from '../errors/customError.js'

const errorHandler = (err, req, res, next) => {
  // this error handle an hexadecimal id with the same length
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Internal Server Error, please try again' })
}

export default errorHandler
