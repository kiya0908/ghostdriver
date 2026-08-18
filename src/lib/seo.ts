export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://ghostdriver.online'

export function createSeo(title: string, description: string, path = '/') {
  const fullTitle = title === 'Ghost Driver Wiki' ? title : `${title} | Ghost Driver Wiki`
  const url = new URL(path, SITE_URL).toString()

  return {
    meta: [
      { title: fullTitle },
      { name: 'description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: 'Ghost Driver Wiki' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
    ],
    links: [{ rel: 'canonical', href: url }],
  }
}
