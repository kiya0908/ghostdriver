export type CodeStatus = 'active' | 'expired' | 'pre-alpha'

export interface GameCode {
  id: string
  code: string
  reward: string
  status: CodeStatus
  addedAt: string
  verifiedAt: string
  source: string
  confidence: 'community-verified' | 'unverified'
}

export type VehicleTier = 'S' | 'A' | 'B' | 'C'
export type VehicleConfidence = 'high' | 'medium-high' | 'medium' | 'low-medium'

export interface Vehicle {
  id: string
  name: string
  slug: string
  realWorldModel?: string
  vehicleClass?: string
  price: number | null
  acquisition?: string
  isFree: boolean
  isLimited: boolean
  isNew?: boolean
  topSpeed: number | null
  tunedTopSpeed?: number | null
  handling: number | null
  acceleration: number | null
  image: string | null
  description: string
  tier?: VehicleTier
  verifiedAt: string
  dataQuality: 'community-estimate' | 'confirmed'
  confidence?: VehicleConfidence
  sources?: string[]
  specsVerified?: boolean
}

export type GuideSection = {
  heading: string
  paragraphs: string[]
  steps?: string[]
  callout?: string
}

export interface Guide {
  id: string
  title: string
  slug: string
  category: string
  summary: string
  content: GuideSection[]
  updatedAt: string
  readTime: string
}

export interface GameUpdate {
  id: string
  title: string
  version: string
  date: string
  content: string[]
  relatedCodes?: string[]
  relatedVehicles?: string[]
}
