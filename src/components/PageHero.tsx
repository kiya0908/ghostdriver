import type { ReactNode } from 'react'

export function PageHero({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lead">{description}</p>
      </div>
      {aside && <div className="hero-aside">{aside}</div>}
    </section>
  )
}

export function SectionHeading({ index, title, description, action }: { index: string; title: string; description?: string; action?: ReactNode }) {
  return (
    <div className="section-heading">
      <div className="section-title-row"><span className="section-index">{index}</span><h2>{title}</h2></div>
      {description && <p>{description}</p>}
      {action && <div className="section-action">{action}</div>}
    </div>
  )
}
