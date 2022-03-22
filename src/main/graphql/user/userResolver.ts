import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { getUserByEmailController, getUserListController, userCreateController } from '../../factory'
import { UserResolverInput } from './userInput'
import { UserSchema } from './userSchema'

@Resolver()
export class UserResolver {
  @Query(() => [UserSchema])
  async getUsers (): Promise<UserSchema[]> {
    return await getUserListController.exec()
  }

  @Query(() => UserSchema, { nullable: true })
  async getUserByEmail (
    @Arg('email') email: string
  ): Promise<UserSchema | undefined> {
    return await getUserByEmailController.exec(email)
  }

  @Mutation(() => UserSchema)
  async createUser (
    @Arg('newUser') newUser: UserResolverInput
  ): Promise<UserSchema> {
    return userCreateController.exec(newUser)
  }
}
