type ErrorDetails = { status: number; origin: string }

export class FetchAPIError extends Error {
  #errorDetails: ErrorDetails

  constructor({ origin, status }: ErrorDetails) {
    super()
    this.#errorDetails = {
      origin,
      status
    }
  }

  getDetails(): ErrorDetails {
    return this.#errorDetails
  }
}
