import { codes } from './codes'
import { guides } from './guides'
import { updates } from './updates'
import { vehicles } from './vehicles'
import type { CodeStatus, GameCode, GameUpdate, Guide, Vehicle } from '@/types/content'

export interface ContentRepository {
  getCodes(status?: CodeStatus): Promise<GameCode[]>
  getVehicles(filter?: 'all' | 'free' | 'limited'): Promise<Vehicle[]>
  getGuides(): Promise<Guide[]>
  getGuide(slug: string): Promise<Guide | null>
  getUpdates(): Promise<GameUpdate[]>
}

export const localContentRepository: ContentRepository = {
  async getCodes(status) {
    return status ? codes.filter((item) => item.status === status) : codes
  },
  async getVehicles(filter = 'all') {
    if (filter === 'free') return vehicles.filter((item) => item.isFree)
    if (filter === 'limited') return vehicles.filter((item) => item.isLimited)
    return vehicles
  },
  async getGuides() {
    return guides
  },
  async getGuide(slug) {
    return guides.find((item) => item.slug === slug) ?? null
  },
  async getUpdates() {
    return [...updates].sort((a, b) => b.date.localeCompare(a.date))
  },
}
