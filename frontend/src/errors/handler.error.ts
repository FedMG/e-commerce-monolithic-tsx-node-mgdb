import { FetchAPIError } from './api'
import { StatusCodes } from './enums.error'
import { BadRequestError, InternalServerError, NotFoundError, UnauthorizedError } from './responses'

type FetchParamsResponse<P, T> = (params: P) => Promise<T>

export function errorHandler<P, T>(service: FetchParamsResponse<P, T>): FetchParamsResponse<P, T> {
  return async function (params) {
    try {
      return await service(params)
    } catch (error) {
      if (error instanceof FetchAPIError) {
        const { origin, status } = error.getDetails()

        if (status === StatusCodes.BAD_REQUEST)
          throw new BadRequestError({ origin, message: 'the request is incorrect' })

        if (status === StatusCodes.UNAUTHORIZED)
          throw new UnauthorizedError({
            origin,
            message: 'you are not authorized, a token is required'
          })

        if (status === StatusCodes.NOT_FOUND)
          throw new NotFoundError({ origin, message: 'the element has not been found' })

        if (status === StatusCodes.INTERNAL_SERVER_ERROR)
          throw new InternalServerError({ origin, message: 'something went wrong with the server' })
      }

      // later fix it
      if ((error as any).name === 'AbortError') {
        console.error('Request was aborted')
      }

      throw new Error(`Something went wrong! ${error}`)
    }
  }
}
