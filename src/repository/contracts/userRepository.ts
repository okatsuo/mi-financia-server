import { UserInput } from '../../inputs'
import { UserSchema } from '../../schemas'

export type CreateUserRepository = {
  create: (data: UserInput) => UserSchema
}
export type GetUsersRepository = {
  getUsers: () => UserSchema[]
}
export type GetUserByEmailRepository = {
  getUserByEmail: (email: string) => UserSchema | undefined
}
