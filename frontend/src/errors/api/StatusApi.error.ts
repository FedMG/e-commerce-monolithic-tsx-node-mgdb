import { ApiError, ApiErrorProps } from "./Api.error"

interface StatusApiErrorProps extends ApiErrorProps {
  status: number
}

export class StatusApiError extends ApiError {
  #status: number

  constructor({ name, message, status, origin }: StatusApiErrorProps) {
    super({ name, message, origin })
    this.#status = status
  }

  getStatus(): number {
    return this.#status
  }
}
