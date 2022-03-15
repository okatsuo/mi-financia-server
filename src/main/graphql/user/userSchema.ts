import { Field, ObjectType } from 'type-graphql'
import { User } from '../../../domain/entities'
import { UserStatus } from '../../../domain/enums/userStatus'

@ObjectType()
export class UserSchema implements Omit<User, 'password'> {
  @Field()
  id: string

  @Field()
  username: string

  @Field()
  email: string

  @Field()
  createdAt: number

  @Field()
  status: UserStatus
}
