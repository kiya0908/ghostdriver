import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ChevronRight, ExternalLink, Flag, Gauge, Map, PlayCircle, Radio, ShieldCheck } from 'lucide-react'
import { CodeCard, GuideCard, VehicleCard } from '@/components/ContentCards'
import { EmptyState, UnofficialNotice } from '@/components/Notice'
import { SectionHeading } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getHomeContent } from '@/server/content'

export const Route = createFileRoute('/')({
  loader: () => getHomeContent(),
  head: () => createSeo(
    'Ghost Driver Roblox Guide, Codes & Gameplay',
    'Ghost Driver Roblox guide with Ghost Driver codes, Roblox code updates, gameplay tips, vehicles, controls and beginner strategies for the pre-alpha driving game.',
  ),
  component: HomePage,
})

function HomePage() {
  const data = Route.useLoaderData()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ghost Driver Wiki',
    description: 'An independent fan-made guide to the Roblox game Ghost Driver, including Ghost Driver codes, gameplay tips, vehicles and updates.',
    inLanguage: 'en',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow"><span />PRE-ALPHA FIELD MANUAL</p>
            <h1>GHOST DRIVER<br /><em>ROBLOX GUIDE.</em></h1>
            <p>Ghost Driver is a Roblox driving game built around threading through dense highway traffic at high speed. Use this independent Ghost Driver guide to check Ghost Driver codes, learn the controls, compare community vehicle records and prepare for cleaner runs.</p>
            <div className="hero-actions">
              <Link className="button primary" to="/codes" search={{ status: 'active' }}>Check Ghost Driver codes <ArrowRight size={17} /></Link>
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
            <p>Ghost Driver is still in pre-alpha, so controls, vehicles, rewards and Ghost Driver Roblox code availability can change between builds.</p>
          </div>
        </div>
      </section>

      <div className="container page-shell home-content">
        <section className="seo-intro">
          <p className="eyebrow"><span />GHOST DRIVER OVERVIEW</p>
          <h2>What is Ghost Driver on Roblox?</h2>
          <div className="seo-copy-grid">
            <p><strong>Ghost Driver</strong> is a fast, risk-heavy Roblox driving experience where the road is the challenge. Instead of a quiet circuit, Ghost Driver puts you into busy highway traffic and asks you to keep speed while choosing safe gaps, changing lanes and recovering from imperfect lines.</p>
            <p>The official Ghost Driver experience is currently marked pre-alpha. That means the game can change quickly, which is why this site separates verified information from community observations. Our Ghost Driver coverage focuses on current controls, Ghost Driver codes, vehicle notes, beginner guidance and update tracking without presenting guesses as confirmed facts.</p>
          </div>
        </section>

        <section>
          <SectionHeading index="01" title="Ghost Driver codes" description="Track Ghost Driver codes and Ghost Driver Roblox code claims without relying on stale lists." action={<Link className="text-link" to="/codes" search={{ status: 'active' }}>Full code tracker <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>Players searching for <strong>Ghost Driver codes</strong> usually want a quick answer: which codes are active right now, what they reward and whether a claimed Ghost Driver Roblox code still works. Because Ghost Driver is still early in development, code availability may be inconsistent or may not exist during some builds.</p>
            <p>We only surface a Ghost Driver code as active when it passes our publication standard. If no verified Ghost Driver codes are available, the page says so instead of filling the list with recycled Roblox code claims.</p>
          </div>
          {data.codes.length ? <div className="code-list">{data.codes.map((item) => <CodeCard key={item.id} item={item} />)}</div> : <EmptyState title="No verified active codes"><span>We found community claims, but no Ghost Driver code met our publication standard. Check back after the next official announcement.</span></EmptyState>}
        </section>

        <section className="section video-section">
          <SectionHeading index="02" title="Watch Ghost Driver gameplay" description="See the pace, traffic density and driving rhythm before your first run." />
          <div className="video-shell">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/LvwkzCRWF1g"
                title="Ghost Driver Roblox gameplay video"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="video-copy">
              <PlayCircle size={30} />
              <h3>Learn the flow before chasing speed</h3>
              <p>This Ghost Driver gameplay video shows the kind of rapid lane decisions the game demands. Watch how quickly traffic gaps appear and disappear, then use that rhythm when you start practicing your own Ghost Driver runs.</p>
              <p>For new players, the useful takeaway is simple: control first, speed second. A clean Ghost Driver run depends more on reading traffic and preserving an exit path than holding maximum throttle.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeading index="03" title="How to play Ghost Driver" description="A four-step route from a fresh spawn to controlled high-speed runs." />
          <div className="section-copy">
            <p>Ghost Driver uses familiar driving inputs, but the traffic-heavy format changes how you should approach them. Use W, A, S and D or the arrow keys to drive, V to change camera or enter first-person view, Shift for the handbrake and drift, and L for headlights.</p>
          </div>
          <ol className="protocol-grid">
            {[
              { icon: Radio, title: 'Check the build', copy: 'Ghost Driver is pre-alpha, so controls, rewards and handling can change.' },
              { icon: Map, title: 'Learn one traffic pattern', copy: 'Repeat a familiar stretch until common merges and braking points stop being guesses.' },
              { icon: Gauge, title: 'Add pace slowly', copy: 'Keep a visible exit path before increasing speed through traffic.' },
              { icon: Flag, title: 'Review the run', copy: 'Change one input, camera choice or setup decision before the next attempt.' },
            ].map((step, index) => <li key={step.title}><span className="protocol-index" aria-hidden="true">0{index + 1}</span><step.icon /><h3>{step.title}</h3><p>{step.copy}</p></li>)}
          </ol>
        </section>

        <section className="section">
          <SectionHeading index="04" title="Ghost Driver vehicles" description="Community records with missing values shown honestly." action={<Link className="text-link" to="/vehicles">All vehicles <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>Vehicle choice changes how Ghost Driver feels through traffic. Acceleration, stability and recovery matter because every lane change happens under pressure. Our Ghost Driver vehicle pages record what the community can currently verify and leave unknown fields blank rather than inventing performance numbers.</p>
          </div>
          <div className="card-grid">{data.vehicles.map((item) => <VehicleCard key={item.id} item={item} />)}</div>
        </section>

        <section className="section">
          <SectionHeading index="05" title="Ghost Driver guides" description="Short, repeatable methods built for a game that is still changing." action={<Link className="text-link" to="/guides">Guide library <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>Our Ghost Driver guides focus on decisions that remain useful even when the pre-alpha build changes: camera control, traffic reading, route repetition, braking discipline and gradual pace increases. If you are new to Ghost Driver, start with the beginner guide before worrying about advanced setups or perfect runs.</p>
          </div>
          <div className="card-grid">{data.guides.map((item, index) => <GuideCard key={item.id} item={item} featured={index === 0} />)}</div>
        </section>

        <section className="section update-strip">
          <div><p className="eyebrow"><span />LATEST TRACKER NOTE</p><h2>{data.updates[0]?.title ?? 'Waiting for a verified update'}</h2><p>{data.updates[0]?.content[0] ?? 'Official Ghost Driver game notes will appear here after source verification.'}</p></div>
          <div className="update-stamp"><ShieldCheck /><strong>{data.updates[0]?.version ?? 'PENDING'}</strong><span>{data.updates[0]?.date ?? 'No date'}</span></div>
          <Link to="/updates" aria-label="View Ghost Driver updates"><ArrowRight /></Link>
        </section>

        <section className="section roblox-cta">
          <div>
            <p className="eyebrow"><span />PLAY THE OFFICIAL EXPERIENCE</p>
            <h2>Ready to drive Ghost Driver?</h2>
            <p>Open the official Ghost Driver Roblox page by Tilted Vehicles and jump into the latest available build. This fan site is independent and is not affiliated with Roblox or the game developer.</p>
          </div>
          <a className="button primary roblox-button" href="https://www.roblox.com/games/137228775845999/Ghost-Driver" target="_blank" rel="noreferrer noopener">Play Ghost Driver on Roblox <ExternalLink size={17} /></a>
        </section>
      </div>
    </>
  )
}
