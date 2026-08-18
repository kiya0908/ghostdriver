import { createFileRoute } from '@tanstack/react-router'
import { GitCommitHorizontal } from 'lucide-react'
import { UnofficialNotice } from '@/components/Notice'
import { PageHero } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getUpdates } from '@/server/content'

export const Route = createFileRoute('/updates')({
  loader: () => getUpdates(),
  head: () => createSeo('Ghost Driver Updates', 'Track sourced Ghost Driver game changes separately from Ghost Driver Wiki website updates.', '/updates'),
  component: UpdatesPage,
})

function UpdatesPage() {
  const updates = Route.useLoaderData()
  return <div className="container page-shell"><PageHero eyebrow="Change radar" title="Update Log" description="Game patch notes and wiki changes stay clearly separated so a community edit is never mistaken for an official release." aside={<div className="hero-stat"><strong>{updates.length.toString().padStart(2, '0')}</strong><span>tracked entries</span></div>} /><UnofficialNotice compact /><div className="timeline">{updates.map((item) => <article key={item.id}><div className="timeline-marker"><GitCommitHorizontal /></div><div className="timeline-date">{item.date}</div><div className="timeline-card"><span>{item.version}</span><h2>{item.title}</h2>{item.content.map((line) => <p key={line}>{line}</p>)}</div></article>)}</div></div>
}
