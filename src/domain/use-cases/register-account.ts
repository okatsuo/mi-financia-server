import { User, UserInput } from '../entities'

export type RegisterAccount = {
  register: (data: UserInput) => Promise<User>
}
