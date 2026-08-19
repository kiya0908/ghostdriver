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
  return value === null ? null : `${value}/100`
}

function speed(value: number | null) {
  return value === null ? null : `${value} MPH`
}

export function VehicleCard({ item }: { item: Vehicle }) {
  const topSpeed = speed(item.topSpeed)
  const handling = stat(item.handling)
  const acceleration = stat(item.acceleration)
  const hasPerformance = topSpeed || handling || acceleration

  return (
    <article className="vehicle-card">
      <div className="vehicle-body">
        <div>
          <div className="vehicle-badges">
            {item.tier && <span className="status-badge">Tier {item.tier}</span>}
            {item.isFree && <span className="status-badge free">Free</span>}
            {item.isLimited && <span className="status-badge limited">Limited</span>}
            {item.isNew && <span className="status-badge active">Recent</span>}
          </div>
          <p className="micro-label">{item.vehicleClass ?? 'GHOST DRIVER CAR'} · {item.confidence ? `${item.confidence} confidence` : 'community record'}</p>
          <h3>{item.name}</h3>
          {item.realWorldModel && <p className="verified-line">Inspired by: {item.realWorldModel}</p>}
          <p>{item.description}</p>
          <p className="verified-line"><strong>Price:</strong> {item.price === null ? 'Not confirmed' : `$${item.price.toLocaleString()}`} · <strong>Access:</strong> {item.acquisition ?? 'Not confirmed'}</p>
        </div>
        {hasPerformance ? (
          <dl className="vehicle-stats">
            {topSpeed && <div><dt><Gauge size={15} />Top speed</dt><dd>{topSpeed}</dd></div>}
            {handling && <div><dt><Wrench size={15} />Handling</dt><dd>{handling}</dd></div>}
            {acceleration && <div><dt><Timer size={15} />Acceleration</dt><dd>{acceleration}</dd></div>}
          </dl>
        ) : <p className="verified-line">Exact performance figures are not published until a current in-game or independently visible spec source is available.</p>}
        <p className="verified-line">Last checked {item.verifiedAt} · {item.dataQuality.replace('-', ' ')}{item.specsVerified === false ? ' · exact specs may still change' : ''}</p>
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
