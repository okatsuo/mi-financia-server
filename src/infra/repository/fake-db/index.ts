import { User } from '../../../domain/entities'
import { UserStatus } from '../../../domain/enums/userStatus'
import { DateHelper, RandomId } from '../../../helpers'

export const users: User[] = [{
  id: RandomId.generate(),
  username: 'Katsuo',
  email: 'lovejingwen',
  password: 'hashed_password',
  status: UserStatus.notVerified,
  createdAt: DateHelper.now()
},
{
  id: RandomId.generate(),
  username: 'Jingwen',
  email: 'lovekatsuo',
  password: 'hashed_password',
  status: UserStatus.verified,
  createdAt: DateHelper.now()
}]
