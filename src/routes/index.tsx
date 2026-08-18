import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ChevronRight, Flag, Gauge, Map, Radio, ShieldCheck } from 'lucide-react'
import { CodeCard, GuideCard, VehicleCard } from '@/components/ContentCards'
import { EmptyState, UnofficialNotice } from '@/components/Notice'
import { SectionHeading } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getHomeContent } from '@/server/content'

export const Route = createFileRoute('/')({
  loader: () => getHomeContent(),
  head: () => createSeo('Ghost Driver Wiki', 'Independent Ghost Driver Roblox codes, vehicle records, beginner guides and update tracking. Fan-made and unofficial.'),
  component: HomePage,
})

function HomePage() {
  const data = Route.useLoaderData()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ghost Driver Wiki',
    description: 'An independent fan-made guide to the Roblox game Ghost Driver.',
    inLanguage: 'en',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow"><span />PRE-ALPHA FIELD MANUAL</p>
            <h1>CUT TRAFFIC.<br /><em>KNOW THE ROAD.</em></h1>
            <p>Your independent Ghost Driver reference for checked codes, community vehicle records, clean-run strategy and patch tracking.</p>
            <div className="hero-actions">
              <Link className="button primary" to="/codes" search={{ status: 'active' }}>Check active codes <ArrowRight size={17} /></Link>
              <Link className="button" to="/guides/$slug" params={{ slug: 'beginner' }}>Start beginner guide</Link>
            </div>
            <UnofficialNotice compact />
          </div>
          <div className="telemetry-panel" role="region" aria-label="Game status summary">
            <div className="telemetry-head"><span>COMMUNITY TELEMETRY</span><span className="live-dot">TRACKING</span></div>
            <div className="speed-dial"><div className="dial-ring"><strong>PRE</strong><span>ALPHA</span></div></div>
            <dl>
              <div><dt>Developer</dt><dd>Tilted Vehicles</dd></div>
              <div><dt>Platform</dt><dd>Roblox</dd></div>
              <div><dt>Data mode</dt><dd>Community verified</dd></div>
            </dl>
            <p>Values may change between game builds. We label unknowns instead of filling gaps with guesses.</p>
          </div>
        </div>
      </section>

      <div className="container page-shell home-content">
        <section>
          <SectionHeading index="01" title="Active codes" description="Only codes that pass a current verification check appear here." action={<Link className="text-link" to="/codes" search={{ status: 'active' }}>Full code tracker <ChevronRight size={15} /></Link>} />
          {data.codes.length ? <div className="code-list">{data.codes.map((item) => <CodeCard key={item.id} item={item} />)}</div> : <EmptyState title="No verified active codes"><span>We found community claims, but no code met our publication standard. Check back after the next official announcement.</span></EmptyState>}
        </section>

        <section className="section">
          <SectionHeading index="02" title="First run protocol" description="A four-step route from a fresh spawn to controlled high-speed runs." />
          <ol className="protocol-grid">
            {[
              { icon: Radio, title: 'Check the build', copy: 'Pre-Alpha changes can alter controls, rewards and handling.' },
              { icon: Map, title: 'Learn one route', copy: 'Repeat a short path until braking points stop being guesses.' },
              { icon: Gauge, title: 'Add pace slowly', copy: 'Consistency first; speed only after you can keep an exit path.' },
              { icon: Flag, title: 'Review the run', copy: 'Change one input or setup choice before the next attempt.' },
            ].map((step, index) => <li key={step.title}><span className="protocol-index" aria-hidden="true">0{index + 1}</span><step.icon /><h3>{step.title}</h3><p>{step.copy}</p></li>)}
          </ol>
        </section>

        <section className="section">
          <SectionHeading index="03" title="Vehicle board" description="Community records with missing values shown honestly." action={<Link className="text-link" to="/vehicles">All vehicles <ChevronRight size={15} /></Link>} />
          <div className="card-grid">{data.vehicles.map((item) => <VehicleCard key={item.id} item={item} />)}</div>
        </section>

        <section className="section">
          <SectionHeading index="04" title="Popular guides" description="Short, repeatable methods built for a game that is still changing." action={<Link className="text-link" to="/guides">Guide library <ChevronRight size={15} /></Link>} />
          <div className="card-grid">{data.guides.map((item, index) => <GuideCard key={item.id} item={item} featured={index === 0} />)}</div>
        </section>

        <section className="section update-strip">
          <div><p className="eyebrow"><span />LATEST TRACKER NOTE</p><h2>{data.updates[0]?.title ?? 'Waiting for a verified update'}</h2><p>{data.updates[0]?.content[0] ?? 'Official game notes will appear here after source verification.'}</p></div>
          <div className="update-stamp"><ShieldCheck /><strong>{data.updates[0]?.version ?? 'PENDING'}</strong><span>{data.updates[0]?.date ?? 'No date'}</span></div>
          <Link to="/updates" aria-label="View updates"><ArrowRight /></Link>
        </section>
      </div>
    </>
  )
}
