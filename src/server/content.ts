import { createServerFn } from '@tanstack/react-start'
import { localContentRepository } from '@/data/repository'
import type { CodeStatus } from '@/types/content'

const codeStatuses: CodeStatus[] = ['active', 'expired', 'pre-alpha']

export const getHomeContent = createServerFn({ method: 'GET' }).handler(async () => {
  const [codes, vehicles, guides, updates] = await Promise.all([
    localContentRepository.getCodes('active'),
    localContentRepository.getVehicles('all'),
    localContentRepository.getGuides(),
    localContentRepository.getUpdates(),
  ])
  return { codes: codes.slice(0, 4), vehicles: vehicles.slice(0, 3), guides: guides.slice(0, 3), updates: updates.slice(0, 2) }
})

export const getCodes = createServerFn({ method: 'GET' })
  .validator((value: unknown) => {
    const status = typeof value === 'string' && codeStatuses.includes(value as CodeStatus) ? (value as CodeStatus) : 'active'
    return status
  })
  .handler(({ data }) => localContentRepository.getCodes(data))

export const getVehicles = createServerFn({ method: 'GET' })
  .validator((value: unknown) => (value === 'free' || value === 'limited' ? value : 'all'))
  .handler(({ data }) => localContentRepository.getVehicles(data))

export const getGuides = createServerFn({ method: 'GET' }).handler(() => localContentRepository.getGuides())

export const getGuide = createServerFn({ method: 'GET' })
  .validator((value: unknown) => {
    if (typeof value !== 'string' || !value.trim()) throw new Error('A guide slug is required.')
    return value
  })
  .handler(({ data }) => localContentRepository.getGuide(data))

export const getUpdates = createServerFn({ method: 'GET' }).handler(() => localContentRepository.getUpdates())
