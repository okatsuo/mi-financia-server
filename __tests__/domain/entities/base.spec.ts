import { BaseEntity } from '../../../src/domain/entities/base'

describe('BaseEntity domain model', () => {
  it('should create with correct properties', () => {
    const baseEntity = new BaseEntity()
    expect(baseEntity).toHaveProperty('id')
    expect(baseEntity).toHaveProperty('createdAt')
  })

  it('should create with correct properties types', () => {
    const baseEntity = new BaseEntity()
    expect(typeof baseEntity.id).toBe('string')
    expect(typeof baseEntity.createdAt).toBe('number')
  })
})
