import { StatusCodes } from 'http-status-codes'

function requiredAPIKey(req, res, next) {
  const providedKey = req.headers['x-api-key']
  const API_KEY = process.env.ADMIN_API_KEY

  if (!API_KEY) {
    console.error("API key is not defined")
    process.exit(1)
  }

  if (!providedKey || providedKey !== API_KEY) {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: "Unauthorized. You need an API key" })
    return
  }

  next()
}
export default requiredAPIKey
