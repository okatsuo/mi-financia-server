import { UserStatus } from '../enums/userStatus'
import { BaseEntity } from './base'

export type UserInput = {
  username: string
  email: string
  password: string
  status?: UserStatus
}

export class User extends BaseEntity {
  username: string
  email: string
  password: string
  status: UserStatus

  constructor (
    userData: UserInput
  ) {
    super()
    this.username = userData.username
    this.email = userData.email
    this.password = userData.password
    this.status = userData.status ?? UserStatus.notVerified
  }
}
