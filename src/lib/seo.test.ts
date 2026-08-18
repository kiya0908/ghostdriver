import { describe, expect, it } from 'vitest'
import { createSeo } from './seo'

describe('createSeo', () => {
  it('creates a unique title, description, Open Graph URL and canonical link', () => {
    const result = createSeo('Codes', 'Verified code tracker.', '/codes')

    expect(result.meta).toContainEqual({ title: 'Codes | Ghost Driver Wiki' })
    expect(result.meta).toContainEqual({ name: 'description', content: 'Verified code tracker.' })
    expect(result.meta).toContainEqual({ property: 'og:url', content: 'https://ghostdriver.online/codes' })
    expect(result.links).toEqual([{ rel: 'canonical', href: 'https://ghostdriver.online/codes' }])
  })
})
