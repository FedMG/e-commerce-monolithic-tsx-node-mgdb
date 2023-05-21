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
