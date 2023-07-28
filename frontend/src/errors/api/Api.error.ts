export interface ApiErrorProps {
  name: string
  message: string
  origin: string
}

export class ApiError extends Error {
  name: string
  #timestamp: Date
  #origin: string
  #msg: string 

  constructor({ name, message, origin }: ApiErrorProps) {
    super(message)
    this.name = name
    this.#origin = origin
    this.#timestamp = new Date()

    const isProduction = process?.env?.NODE_ENV === 'production'
    this.#msg = isProduction ? `${name}: ${message}` : `${name}: ${message} at ${origin}`
  }

  getTimestamp(): Date {
    return this.#timestamp
  }

  getName(): string {
    return this.name
  }

  getMessage(): string {
    return this.#msg
  }

  getOrigin(): string {
    return this.#origin
  }
}
