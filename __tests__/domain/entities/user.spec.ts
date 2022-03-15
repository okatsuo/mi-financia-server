import { User, UserInput } from '../../../src/domain/entities/user'
import { UserStatus } from '../../../src/domain/enums/userStatus'

describe('User domain model', () => {
  it('should have correct properties', () => {
    const userInput: UserInput = { email: 'valid_mail@mail.com', password: 'valid_password', username: 'valid_username', status: UserStatus.notVerified }
    const user = new User(userInput)
    expect(user).toMatchObject(userInput)
  })

  it('should have create with default status if no status is provided', () => {
    const userInput: UserInput = { email: 'valid_mail@mail.com', password: 'valid_password', username: 'valid_username' }
    const user = new User(userInput)
    expect(user.status).toBe(UserStatus.notVerified)
  })

  it('should contain default BaseEntity properties', () => {
    const userInput: UserInput = { email: 'valid_mail@mail.com', password: 'valid_password', username: 'valid_username' }
    const user = new User(userInput)
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('created_at')
  })
})
