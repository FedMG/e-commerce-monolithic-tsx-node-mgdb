import { ApiError, TypeErrorsProps } from "@/errors"

export class InvalidContextError extends ApiError {
  constructor({ origin, message }: TypeErrorsProps) {
    super({ name: 'Invalid Context', message, origin })
  }
}

export class InvalidArgumentError extends ApiError {
  constructor({ origin, message }: TypeErrorsProps) {
    super({ name: 'Invalid Argument', message, origin })
  }
}

export class AbortError extends ApiError {
  constructor({ origin, message }: TypeErrorsProps) {
    super({ name: 'AbortError', message, origin })
  }
}
