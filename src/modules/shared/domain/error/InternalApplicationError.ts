export default class InternalApplicationError extends Error {
  static readonly ERROR_NAME = 'InternalApplicationError'

  constructor(message: string) {
    super(message)
    this.name = InternalApplicationError.ERROR_NAME
  }
}
