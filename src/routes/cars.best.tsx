import { createFileRoute, Link } from '@tanstack/react-router'
import { DataCaution, UnofficialNotice } from '@/components/Notice'
import { PageHero } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'
import type { VehicleTier } from '@/types/content'

export const Route = createFileRoute('/cars/best')({
  loader: () => getVehicles({ data: 'all' }),
  head: () => createSeo('Ghost Driver Best Cars & Tier List', 'Compare the best Ghost Driver cars with a cautious community tier list based on current verified vehicle records, price context and repeatable gameplay evidence.', '/cars/best'),
  component: TierListPage,
})

function TierListPage() {
  const vehicles = Route.useLoaderData()
  const tiers: VehicleTier[] = ['S', 'A', 'B', 'C']
  return (
    <div className="container page-shell">
      <PageHero eyebrow="Ghost Driver best cars" title="Best Ghost Driver Cars & Tier List" description="A living community ranking built from verified car identities and available performance evidence. Exact rankings can change as Pre-Alpha balance and vehicle data change." aside={<div className="hero-stat"><strong>{vehicles.filter((item) => item.tier).length}</strong><span>currently ranked</span></div>} />
      <UnofficialNotice compact /><DataCaution />
      <nav className="filter-tabs" aria-label="Car sections"><Link to="/cars">All cars</Link><Link to="/cars/new">New cars</Link><Link to="/cars/free">Free cars</Link><Link to="/cars/limited">Limited cars</Link><Link className="active" to="/cars/best">Best cars</Link></nav>
      <section className="content-section"><h2>How this Ghost Driver tier list works</h2><p>This is not a list created by filling unknown statistics with guesses. Cars only receive a tier when there is enough evidence to make the ranking useful. Top speed matters, but so do acceleration, control, acquisition cost, tuning potential and how practical the car is for real traffic runs.</p><p>At the moment the Takama F10 GT and Audi R8 have the clearest high-end ranking signals in our tracked data. Other confirmed cars remain unranked until current gameplay evidence supports a stronger comparison.</p></section>
      <div className="tier-list">{tiers.map((tier) => { const items = vehicles.filter((vehicle) => vehicle.tier === tier); return <section key={tier} className={`tier-row tier-${tier.toLowerCase()}`}><div className="tier-label"><strong>{tier}</strong><span>{tier === 'S' ? 'Top potential' : tier === 'A' ? 'Strong pick' : tier === 'B' ? 'Situational' : 'Needs testing'}</span></div><div className="tier-items">{items.length ? items.map((item) => <article key={item.id}><h2>{item.name}</h2><p>{item.description}</p><span>Checked {item.verifiedAt}</span></article>) : <p>No car has enough current evidence for this tier yet.</p>}</div></section> })}</div>
      <section className="content-section"><h2>What makes a car one of the best in Ghost Driver?</h2><p>The best car depends on what you are trying to do. A high top-speed car can dominate long open sections but feel less forgiving in dense traffic. A cheaper or slower car may be a better progression choice if it gives you predictable steering and lets you build consistent runs before moving to expensive supercars.</p><p>Use this page as a ranking guide rather than a purchase command. Before spending Cash, compare the latest information on the main <Link to="/cars">Ghost Driver cars database</Link> and check whether a car is currently limited or newly added.</p></section>
    </div>
  )
}
