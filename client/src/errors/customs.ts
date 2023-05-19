export class InvalidContextError extends Error {
  constuctor (msg: string): void {
    this.message = msg
  }
}
