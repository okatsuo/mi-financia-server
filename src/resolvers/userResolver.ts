import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { UserInput } from '../inputs'
import { getUserByEmailController, getUserListController, userCreateController } from '../main/factory'
import { UserSchema } from '../schemas'

@Resolver()
export class UserResolver {
  @Query(() => [UserSchema])
  async getUsers (): Promise<UserSchema[]> {
    return getUserListController.exec()
  }

  @Query(() => UserSchema, { nullable: true })
  async getUserByEmail (
    @Arg('email') email: string
  ): Promise<UserSchema | undefined> {
    return getUserByEmailController.exec(email)
  }

  @Mutation(() => UserSchema)
  async createUser (
    @Arg('newUser') newUser: UserInput
  ): Promise<UserSchema> {
    return userCreateController.exec(newUser)
  }
}
