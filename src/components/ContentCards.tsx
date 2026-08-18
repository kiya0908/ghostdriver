import { Link } from '@tanstack/react-router'
import { ArrowUpRight, CalendarDays, Gauge, Timer, Wrench } from 'lucide-react'
import type { GameCode, Guide, Vehicle } from '@/types/content'
import { CopyCodeButton } from './CopyCodeButton'

export function CodeCard({ item }: { item: GameCode }) {
  return (
    <article className="code-card">
      <div className="code-main">
        <span className={`status-badge ${item.status}`}>{item.status}</span>
        <code>{item.code}</code>
        <p>{item.reward}</p>
      </div>
      <div className="card-meta"><span>Added {item.addedAt}</span><span>Checked {item.verifiedAt}</span></div>
      <CopyCodeButton value={item.code} />
    </article>
  )
}

function stat(value: number | null) {
  return value === null ? 'Pending' : `${value}/100`
}

export function VehicleCard({ item }: { item: Vehicle }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-visual" aria-hidden="true">
        <span className="vehicle-number">{item.tier ?? '—'}</span>
        <div className="car-silhouette"><span /><span /></div>
        <div className="vehicle-badges">
          {item.isFree && <span className="status-badge free">Free</span>}
          {item.isLimited && <span className="status-badge limited">Limited</span>}
        </div>
      </div>
      <div className="vehicle-body">
        <div><p className="micro-label">COMMUNITY RECORD</p><h3>{item.name}</h3><p>{item.description}</p></div>
        <dl className="vehicle-stats">
          <div><dt><Gauge size={15} />Top speed</dt><dd>{stat(item.topSpeed)}</dd></div>
          <div><dt><Wrench size={15} />Handling</dt><dd>{stat(item.handling)}</dd></div>
          <div><dt><Timer size={15} />Acceleration</dt><dd>{stat(item.acceleration)}</dd></div>
        </dl>
        <p className="verified-line">Last checked {item.verifiedAt} · {item.dataQuality.replace('-', ' ')}</p>
      </div>
    </article>
  )
}

export function GuideCard({ item, featured = false }: { item: Guide; featured?: boolean }) {
  return (
    <article className={`guide-card ${featured ? 'featured' : ''}`}>
      <div className="guide-card-top"><span>{item.category}</span><span>{item.readTime}</span></div>
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <div className="guide-card-bottom"><span><CalendarDays size={15} />Updated {item.updatedAt}</span><Link to="/guides/$slug" params={{ slug: item.slug }} aria-label={`Read ${item.title}`}><ArrowUpRight /></Link></div>
    </article>
  )
}
