import { User } from '../../domain/entities'

export type IRegisterAccountRepository = {
  register: (data: User) => Promise<User>
}
