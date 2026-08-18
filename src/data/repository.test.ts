import { describe, expect, it } from 'vitest'
import { localContentRepository } from './repository'

describe('localContentRepository', () => {
  it('does not publish invented active codes', async () => {
    await expect(localContentRepository.getCodes('active')).resolves.toEqual([])
  })

  it('filters free and limited vehicles independently', async () => {
    const free = await localContentRepository.getVehicles('free')
    const limited = await localContentRepository.getVehicles('limited')

    expect(free.length).toBeGreaterThan(0)
    expect(free.every((vehicle) => vehicle.isFree)).toBe(true)
    expect(limited.length).toBeGreaterThan(0)
    expect(limited.every((vehicle) => vehicle.isLimited)).toBe(true)
  })

  it('provides every required guide slug', async () => {
    const guides = await localContentRepository.getGuides()
    expect(guides.map((guide) => guide.slug).sort()).toEqual(['beginner', 'driving', 'money', 'song-ids', 'tuning'])
  })

  it('returns null for an unknown guide', async () => {
    await expect(localContentRepository.getGuide('not-a-guide')).resolves.toBeNull()
  })
})
