import { UserStatus } from '../../../src/domain/enums/userStatus'

describe('UserStatus domain enums', () => {
  it('should have correct values', () => {
    expect(UserStatus.banned).toBe('banned')
    expect(UserStatus.verified).toBe('verified')
    expect(UserStatus.notVerified).toBe('notVerified')
  })
})
