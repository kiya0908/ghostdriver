import { createFileRoute, Link } from '@tanstack/react-router'
import { VehicleCard } from '@/components/ContentCards'
import { DataCaution, UnofficialNotice } from '@/components/Notice'
import { PageHero } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getVehicles } from '@/server/content'

export const Route = createFileRoute('/cars/new')({
  loader: () => getVehicles({ data: 'all' }),
  head: () => createSeo('Ghost Driver New Cars – Latest Cars & Recent Additions', 'See the latest Ghost Driver cars and recently tracked additions with verification dates, limited status and clearly marked unknown specifications.', '/cars/new'),
  component: NewCarsPage,
})

function NewCarsPage() {
  const cars = Route.useLoaderData().filter((car) => car.isNew)
  return <div className="container page-shell">
    <PageHero eyebrow="Latest Ghost Driver cars" title="Ghost Driver New Cars" description="Recent cars and update-era additions currently tracked by this fan database. New does not mean permanently available: check limited status and the latest in-game showroom before buying." aside={<div className="hero-stat"><strong>{cars.length}</strong><span>recent cars</span></div>} />
    <UnofficialNotice compact /><DataCaution />
    <nav className="filter-tabs" aria-label="Car sections"><Link to="/cars">All cars</Link><Link className="active" to="/cars/new">New cars</Link><Link to="/cars/free">Free cars</Link><Link to="/cars/limited">Limited cars</Link><Link to="/cars/best">Best cars</Link></nav>
    <div className="card-grid">{cars.map((car) => <VehicleCard key={car.id} item={car} />)}</div>
    <section className="content-section"><h2>How we track new Ghost Driver cars</h2><p>Ghost Driver changes quickly during active development, so a “new” label is based on recent update coverage and the date a vehicle entered our tracked dataset. We do not assume that every recent car is still in the dealership, and we keep limited availability separate from recency.</p><p>For the broader garage, return to the <Link to="/cars">Ghost Driver cars database</Link>. If you are deciding what to buy rather than what was recently added, compare the <Link to="/cars/best">best cars and tier list</Link> and the <Link to="/cars/limited">limited cars tracker</Link>.</p></section>
  </div>
}
