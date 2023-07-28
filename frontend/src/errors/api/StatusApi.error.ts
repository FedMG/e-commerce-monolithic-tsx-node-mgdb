import { ApiError, ApiErrorProps } from "@/errors/api"

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
