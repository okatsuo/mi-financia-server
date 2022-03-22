import { Arg, createUnionType, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../../../domain/entities'
import { Response } from '../../../presentation/contracts/http'
import { getUserByEmailController, getUserListController, makeRegisterAccountController } from '../../factory'
import RequestError from '../requestError/requestErrorSchema'
import { UserResolverInput } from './userInput'
import UserSchema from './userSchema'

const UserUnion = createUnionType({ // TODO: move to create a generic Union
  name: 'UserRequest',
  types: () => [UserSchema, RequestError],
  resolveType: (data) => {
    if ('code' in data) return RequestError
    return UserSchema
  }
})

@Resolver()
export class UserResolver {
  @Query(() => [UserSchema])
  async getUsers (): Promise<Response<User[]>> {
    return await getUserListController.exec()
  }

  @Query(() => UserSchema, { nullable: true })
  async getUserByEmail (
    @Arg('email') email: string
  ): Promise<Response<User>> {
    return await getUserByEmailController.exec(email)
  }

  @Mutation(() => UserUnion)
  async createUser (
    @Arg('fields') newUser: UserResolverInput
  ): Promise<Response<User>> {
    return await makeRegisterAccountController().exec(newUser)
  }
}
