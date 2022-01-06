export default class AlreadyExistsError extends Error {
  static readonly ERROR_NAME = 'AlreadyExistsError'

  constructor(message: string) {
    super(message)
    this.name = AlreadyExistsError.ERROR_NAME
  }
}
