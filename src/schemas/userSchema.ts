import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class UserSchema {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  email: string
}
