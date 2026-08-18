import { createFileRoute, Link } from '@tanstack/react-router'
import { DataCaution, UnofficialNotice } from '@/components/Notice'
import { PageHero } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'
import type { VehicleTier } from '@/types/content'

export const Route = createFileRoute('/vehicles/best')({
  loader: () => getVehicles({ data: 'all' }),
  head: () => createSeo('Best Cars & Tier List', 'A cautious community Ghost Driver car tier list with transparent data quality and verification dates.', '/vehicles/best'),
  component: TierListPage,
})

function TierListPage() {
  const vehicles = Route.useLoaderData()
  const tiers: VehicleTier[] = ['S', 'A', 'B', 'C']
  return (
    <div className="container page-shell">
      <PageHero eyebrow="Community ranking" title="Best Cars / Tier List" description="A provisional ranking framework, not an official balance sheet. Cars move only after repeatable in-game tests." aside={<div className="hero-stat"><strong>WIP</strong><span>Pre-Alpha ranking</span></div>} />
      <UnofficialNotice compact /><DataCaution />
      <nav className="filter-tabs" aria-label="Vehicle sections"><Link to="/vehicles">All cars</Link><Link to="/vehicles/free">Free cars</Link><Link to="/vehicles/limited">Limited cars</Link><Link className="active" to="/vehicles/best">Tier list</Link></nav>
      <div className="tier-list">
        {tiers.map((tier) => {
          const items = vehicles.filter((vehicle) => vehicle.tier === tier)
          return <section key={tier} className={`tier-row tier-${tier.toLowerCase()}`}><div className="tier-label"><strong>{tier}</strong><span>{tier === 'S' ? 'Top potential' : tier === 'A' ? 'Strong pick' : tier === 'B' ? 'Situational' : 'Needs testing'}</span></div><div className="tier-items">{items.length ? items.map((item) => <article key={item.id}><h2>{item.name}</h2><p>{item.description}</p><span>Checked {item.verifiedAt}</span></article>) : <p>No vehicle has enough evidence for this tier.</p>}</div></section>
        })}
      </div>
      <p className="method-note"><strong>Ranking method:</strong> control, acceleration, route usefulness and acquisition cost should be tested separately. The current records are structural placeholders and must not be treated as purchase advice.</p>
    </div>
  )
}
