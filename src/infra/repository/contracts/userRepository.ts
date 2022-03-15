import { UserInput } from '../../../main/graphql/inputs'
import { UserSchema } from '../../../main/graphql/schemas'

export type CreateUserRepository = {
  create: (data: UserInput) => UserSchema
}
export type GetUsersRepository = {
  getUsers: () => UserSchema[]
}
export type GetUserByEmailRepository = {
  getUserByEmail: (email: string) => UserSchema | undefined
}
