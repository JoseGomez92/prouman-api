import uuid from 'uuid'
import InvalidArgumentError from '../error/InvalidArgumentError'

export default class UuidValueObject {
  constructor(readonly value: string) {
    this.guard(value)
  }

  private guard(value: string) {
    if (!uuid.validate(value)) {
      throw new InvalidArgumentError(`The value <${value}> is not a valid UUID`)
    }
  }
}
