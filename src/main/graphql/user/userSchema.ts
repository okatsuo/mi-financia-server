import { Field, ObjectType } from 'type-graphql'
import { User as UserModel } from '../../../domain/entities'
import { UserStatus } from '../../../domain/enums/userStatus'

@ObjectType()
export default class User implements Omit<UserModel, 'password'> {
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
