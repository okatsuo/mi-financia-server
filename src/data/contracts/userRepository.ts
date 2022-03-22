import { User, UserInput } from '../../domain/entities'

export type IRegisterAccountRepository = {
  register: (data: UserInput) => Promise<User>
}
