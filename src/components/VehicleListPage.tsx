import { Link } from '@tanstack/react-router'
import { VehicleCard } from './ContentCards'
import { DataCaution, UnofficialNotice } from './Notice'
import { PageHero } from './PageHero'
import type { Vehicle } from '@/types/content'

export function VehicleListPage({ title, description, items, active }: { title: string; description: string; items: Vehicle[]; active: 'all' | 'free' | 'limited' }) {
  return (
    <div className="container page-shell">
      <PageHero eyebrow="Garage database" title={title} description={description} aside={<div className="hero-stat"><strong>{items.length.toString().padStart(2, '0')}</strong><span>community records</span></div>} />
      <UnofficialNotice compact />
      <DataCaution />
      <nav className="filter-tabs" aria-label="Filter vehicles">
        <Link className={active === 'all' ? 'active' : ''} to="/vehicles">All cars</Link>
        <Link className={active === 'free' ? 'active' : ''} to="/vehicles/free">Free cars</Link>
        <Link className={active === 'limited' ? 'active' : ''} to="/vehicles/limited">Limited cars</Link>
        <Link to="/vehicles/best">Tier list</Link>
      </nav>
      <div className="card-grid">{items.map((item) => <VehicleCard key={item.id} item={item} />)}</div>
    </div>
  )
}
