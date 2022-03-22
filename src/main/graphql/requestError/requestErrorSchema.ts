import { Field, ObjectType } from 'type-graphql'
import { IRequestError } from '../../resources'

@ObjectType()
export default class RequestError implements IRequestError {
  @Field()
  code: number

  @Field()
  msg: string
}
