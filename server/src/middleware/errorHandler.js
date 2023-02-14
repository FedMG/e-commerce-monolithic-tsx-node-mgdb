import { StatusCodes } from 'http-status-codes'

const errorHandler = (err, req, res, next) => {

  if (err.name === 'ValidationError') {
    return res.status(StatusCodes.BAD_REQUEST).json(
      Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
    )
  }
  
  if (err.code && err.code === 11000) {
    return res.status(StatusCodes.BAD_REQUEST).json({ 
      msg: `The ${Object.keys(err.keyValue)} is already in use, please choose another`
       })  
  }
  
  if (err.name === 'CastError') {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No item found with id : ${err.value}` })  
  }
  
  return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ 
    msg: err.message || 'Internal Server Error, please try again' 
    })
}

export default errorHandler
