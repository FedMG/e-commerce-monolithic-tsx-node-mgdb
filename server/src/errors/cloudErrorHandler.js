import { BadRequestError } from './customTypes.js'

export const cloudErrorHandler = (callback) => {
  try {
    return callback
  } catch (err) {
    const { error } = err

    if (error.code === 'ENAMETOOLONG') {
      throw new BadRequestError(
        'There was an issue with the upload file process. The file must be a valid format.'
      )
    }

    throw err
  }
}
