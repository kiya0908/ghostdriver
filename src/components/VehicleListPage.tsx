import { Link } from '@tanstack/react-router'
import { VehicleCard } from './ContentCards'
import { DataCaution, UnofficialNotice } from './Notice'
import { PageHero } from './PageHero'
import type { Vehicle } from '@/types/content'

export function VehicleListPage({ title, description, items, active }: { title: string; description: string; items: Vehicle[]; active: 'all' | 'free' | 'limited' }) {
  const limitedCount = items.filter((item) => item.isLimited).length
  const freeCount = items.filter((item) => item.isFree).length
  const recentCount = items.filter((item) => item.isNew).length

  return (
    <div className="container page-shell">
      <PageHero eyebrow="Ghost Driver cars database" title={title} description={description} aside={<div className="hero-stat"><strong>{items.length.toString().padStart(2, '0')}</strong><span>tracked cars</span></div>} />
      <UnofficialNotice compact />
      <DataCaution />

      {active === 'all' && (
        <>
          <section className="stat-strip" aria-label="Cars database summary">
            <div><strong>{items.length}</strong><span>tracked cars</span></div>
            <div><strong>{limitedCount}</strong><span>limited</span></div>
            <div><strong>{freeCount}</strong><span>free / reported free</span></div>
            <div><strong>{recentCount}</strong><span>recent additions</span></div>
          </section>
          <section className="content-section">
            <p className="micro-label">DATABASE POLICY</p>
            <h2>Ghost Driver car data without invented stats</h2>
            <p>This database combines independently observed Ghost Driver gameplay with community references. A car can be confirmed while its price or performance values remain unknown. When current in-game evidence is missing, the field stays pending instead of being filled with an estimate.</p>
            <p>Use the sections below to browse every tracked Ghost Driver car, compare limited and free cars, or open the evolving best-cars tier list. Ghost Driver is still changing quickly, so every record includes a verification date and conservative data-quality label.</p>
          </section>
        </>
      )}

      <nav className="filter-tabs" aria-label="Filter Ghost Driver cars">
        <Link className={active === 'all' ? 'active' : ''} to="/vehicles">All cars</Link>
        <Link className={active === 'free' ? 'active' : ''} to="/vehicles/free">Free cars</Link>
        <Link className={active === 'limited' ? 'active' : ''} to="/vehicles/limited">Limited cars</Link>
        <Link to="/vehicles/best">Best cars & tier list</Link>
      </nav>

      <div className="card-grid">{items.map((item) => <VehicleCard key={item.id} item={item} />)}</div>

      <section className="content-section">
        <p className="micro-label">HOW TO READ THE DATABASE</p>
        <h2>{active === 'limited' ? 'How Ghost Driver limited cars are tracked' : active === 'free' ? 'How Ghost Driver free cars are verified' : 'How cars work in Ghost Driver'}</h2>
        {active === 'limited' ? (
          <><p>Limited cars can appear through time-sensitive dealership or showroom rotations. Availability can change between updates, so a Limited badge describes the strongest current evidence we have rather than a promise that the car is purchasable at this exact moment.</p><p>Before spending currency, confirm the current showroom in-game. We keep previously observed limited cars in the database because players still search for their names, builds and possible return rotations.</p></>
        ) : active === 'free' ? (
          <><p>Ghost Driver has cars described by independent or community sources as free, starter, donated or group rewards. Those labels are easy to confuse, so this page separates confirmed vehicle identity from the unlock method. If the requirement has not been reproduced directly, the card says so.</p><p>A free car is not automatically the best long-term car. Compare acquisition cost, upgrade path and current driving goals before replacing a starter vehicle.</p></>
        ) : (
          <><p>Cars are the core progression layer in Ghost Driver: players acquire vehicles, tune them and use them across traffic runs and other driving activities. The useful comparison is not only top speed. Acquisition cost, handling, acceleration, upgrade potential and availability all matter.</p><p>Because the game is in active development, exact specifications can change. This page therefore favors verified identities and transparent unknown fields over a larger but unreliable catalog.</p></>
        )}
      </section>
    </div>
  )
}
