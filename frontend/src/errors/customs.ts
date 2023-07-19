// export function ErrorConfigContext (origin: string, errorClass) {
//   return function (message: string) {
//     return errorClass(origin, message)
//   }
// }

export class CustomApiError extends Error {
  constructor (message: string) {
    super()
    this.message = message
  }
}

export class InvalidContextError extends CustomApiError {
  constructor (message: string) {
    super(message)
  }
}

export class InvalidArgumentError extends CustomApiError {
  origin: string
  timestamp: Date

  constructor (origin: string, message: string) {
    super(message)
    this.origin = origin
    this.timestamp = new Date()
  }
}

export class BadRequestError extends CustomApiError {
  constructor (message: string) {
    super(message)
  }
}

export class BadFetchError extends CustomApiError {
  constructor (message: string) {
    super(message)
  }
}
