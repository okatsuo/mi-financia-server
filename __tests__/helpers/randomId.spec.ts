import { RandomId } from '../../src/helpers'

describe('RandomId helper', () => {
  it('should generate the ID with correct format', () => {
    const id = RandomId.generate()
    expect(typeof id).toBe('string')
    expect(id).not.toBeUndefined()
    expect(id.length > 10).toBe(true)
  })
})
