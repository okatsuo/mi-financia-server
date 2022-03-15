import { Field, InputType } from 'type-graphql'
import { UserInput } from '../../../domain/entities'

@InputType()
export class UserResolverInput implements UserInput {
  @Field()
  username: string

  @Field()
  email: string

  @Field()
  password: string
}
