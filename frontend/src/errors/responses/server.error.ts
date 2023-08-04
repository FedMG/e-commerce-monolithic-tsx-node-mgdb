import { ApiErrorProps, StatusApiError } from "../api"

export interface TypeErrorsProps extends Pick<ApiErrorProps, 'message' | 'origin'> {}

export class BadRequestError extends StatusApiError {
  constructor({ origin, message }: TypeErrorsProps) {
    super({ name: 'Bad Request', message, status: 400, origin })
  }
}

export class UnauthorizedError extends StatusApiError {
  constructor({ origin, message }: TypeErrorsProps) {
    super({
      name: 'Unauthorized',
      message,
      status: 401,
      origin
    })
  }
}

export class ForbiddenError extends StatusApiError {
  constructor({ origin, message }: TypeErrorsProps) {
    super({ name: 'Forbidden', message, status: 403, origin })
  }
}

export class NotFoundError extends StatusApiError {
  constructor({ origin, message }: TypeErrorsProps) {
    super({ name: 'Not Found', message, status: 404, origin })
  }
}

export class InternalServerError extends StatusApiError {
  constructor({ origin, message }: TypeErrorsProps) {
    super({ name: 'Internal Server', message, status: 500, origin })
  }
}
