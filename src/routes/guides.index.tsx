import { createFileRoute } from '@tanstack/react-router'
import { GuideCard } from '@/components/ContentCards'
import { UnofficialNotice } from '@/components/Notice'
import { PageHero } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getGuides } from '@/server/content'

export const Route = createFileRoute('/guides/')({
  loader: () => getGuides(),
  head: () => createSeo('Ghost Driver Guides', 'Beginner, money farming, tuning, traffic cutting, drift and song ID guides for the Roblox game Ghost Driver.', '/guides'),
  component: GuidesPage,
})

function GuidesPage() {
  const guides = Route.useLoaderData()
  return <div className="container page-shell"><PageHero eyebrow="Driver briefing" title="Guide Library" description="Practical, version-aware methods for cleaner runs, smarter spending and repeatable improvement." aside={<div className="hero-stat"><strong>{guides.length.toString().padStart(2, '0')}</strong><span>field guides</span></div>} /><UnofficialNotice compact /><div className="card-grid guide-library">{guides.map((guide, index) => <GuideCard key={guide.id} item={guide} featured={index === 0} />)}</div></div>
}
