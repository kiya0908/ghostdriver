import { createFileRoute, Link } from '@tanstack/react-router'
import { DataCaution, UnofficialNotice } from '@/components/Notice'
import { PageHero, SectionHeading } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'
import type { VehicleTier } from '@/types/content'

export const Route = createFileRoute('/cars/best')({
  loader: () => getVehicles({ data: 'all' }),
  head: () => createSeo('Ghost Driver Best Cars & Tier List', 'Compare the best Ghost Driver cars with a cautious community tier list based on current verified car records, price context and repeatable gameplay evidence.', '/cars/best'),
  component: TierListPage,
})

function TierListPage() {
  const cars = Route.useLoaderData()
  const tiers: VehicleTier[] = ['S', 'A', 'B', 'C']
  const ranked = cars.filter((item) => item.tier)

  return (
    <div className="container page-shell">
      <PageHero eyebrow="Ghost Driver best cars" title="Best Ghost Driver Cars & Tier List" description="A living community ranking built from verified car identities and available performance evidence. Rankings can change as Pre-Alpha balance and car data change." aside={<div className="hero-stat"><strong>{ranked.length}</strong><span>currently ranked</span></div>} />
      <UnofficialNotice compact />
      <DataCaution />

      <section className="section" aria-labelledby="tier-method">
        <SectionHeading index="01" title="How This Ghost Driver Tier List Works" description="Cars only receive a tier when the available evidence makes the comparison useful." />
        <div className="redeem-layout">
          <div className="section-copy" id="tier-method">
            <p>This is not a ranking created by filling unknown statistics with guesses. Top speed matters, but so do acceleration, control, acquisition cost, tuning potential and how practical a car is for real traffic runs. A car can be confirmed in the database without being ranked if its current performance evidence is too thin.</p>
            <p>At the moment the Takama F10 GT and Audi R8 have the clearest high-end ranking signals in our tracked data. Other confirmed cars remain unranked until current gameplay evidence supports a stronger comparison. This keeps the tier list smaller, but more useful than assigning every car a letter without a repeatable basis.</p>
          </div>
          <aside className="source-panel"><h2>Ranking rule</h2><p>Identity first, performance evidence second, tier last. Unknown data does not become a low tier automatically.</p></aside>
        </div>
      </section>

      <section className="section" aria-labelledby="tier-list">
        <SectionHeading index="02" title="Ghost Driver Car Tier List" description="Current S, A, B and C tiers based on the strongest available evidence." />
        <nav className="filter-tabs" aria-label="Car sections"><Link to="/cars">All cars</Link><Link to="/cars/new">New cars</Link><Link to="/cars/free">Free cars</Link><Link to="/cars/limited">Limited cars</Link><Link className="active" to="/cars/best">Best cars</Link></nav>
        <div className="tier-list" id="tier-list">
          {tiers.map((tier) => {
            const items = cars.filter((car) => car.tier === tier)
            return <section key={tier} className={`tier-row tier-${tier.toLowerCase()}`}><div className="tier-label"><strong>{tier}</strong><span>{tier === 'S' ? 'Top potential' : tier === 'A' ? 'Strong pick' : tier === 'B' ? 'Situational' : 'Needs testing'}</span></div><div className="tier-items">{items.length ? items.map((item) => <article key={item.id}><h3>{item.name}</h3><p>{item.description}</p><span>Checked {item.verifiedAt}</span></article>) : <p>No car has enough current evidence for this tier yet.</p>}</div></section>
          })}
        </div>
      </section>

      <section className="section" aria-labelledby="best-car-factors">
        <SectionHeading index="03" title="What Makes a Car One of the Best?" description="The best Ghost Driver car depends on where and how you drive." />
        <div className="seo-copy-grid" id="best-car-factors">
          <p>A high top-speed car can dominate long open sections but feel less forgiving in dense traffic. A cheaper or slower car may be a better progression choice if it gives you predictable steering and lets you build consistent runs before moving to expensive supercars.</p>
          <p>Use this page as a ranking guide rather than a purchase command. Before spending Cash, compare the latest information on the main <Link to="/cars">Ghost Driver cars database</Link>, check <Link to="/cars/limited">limited status</Link>, and review <Link to="/cars/new">recent additions</Link>.</p>
        </div>
      </section>
    </div>
  )
}
