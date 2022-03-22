import { Field, ObjectType } from 'type-graphql'
import { IRequestError } from '../../../presentation/errors'

@ObjectType()
export default class RequestError implements IRequestError {
  @Field()
  code: number

  @Field()
  msg: string
}
