import { RandomId } from '../../helpers'
import { DateHelper } from '../../helpers/date'

export class BaseEntity {
  id: string
  createdAt: number

  constructor () {
    this.id = RandomId.generate()
    this.createdAt = DateHelper.now()
  }
}
