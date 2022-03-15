import { randomUUID } from 'crypto'

export class RandomId {
  static generate = (): string => randomUUID()
}
