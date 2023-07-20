import { StatusCodes } from 'http-status-codes'

const notFound = (_req, res) => res.status(StatusCodes.NOT_FOUND).send('This route does not exist')

export default notFound
