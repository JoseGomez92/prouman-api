import AggregateRoot from './AggregateRoot'

export default abstract class AggregateRootCollection<T extends Array<AggregateRoot>> {
  abstract get(): T
  abstract toPrimitives(): any
}
