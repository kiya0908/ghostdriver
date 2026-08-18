import { createFileRoute } from '@tanstack/react-router'

const paths = [
  '/', '/codes', '/vehicles', '/vehicles/free', '/vehicles/limited', '/vehicles/best',
  '/guides', '/guides/beginner', '/guides/money', '/guides/tuning', '/guides/driving', '/guides/song-ids',
  '/updates', '/faq', '/about', '/privacy', '/terms', '/contact',
]

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin
        const urls = paths.map((path) => `<url><loc>${origin}${path}</loc></url>`).join('')
        return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
          headers: { 'Content-Type': 'application/xml; charset=utf-8' },
        })
      },
    },
  },
})
