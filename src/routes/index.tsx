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
            <p><strong>Ghost Driver</strong> is a fast, risk-heavy Roblox driving experience where the road itself is the challenge. Instead of placing you on a quiet circuit, Ghost Driver sends you into busy highway traffic and asks you to maintain speed while choosing gaps, changing lanes and recovering from imperfect lines. The basic idea is easy to understand, but clean high-speed runs require patience, awareness and increasingly precise control.</p>
            <p>The official Ghost Driver experience is currently marked pre-alpha. That matters when using any Ghost Driver wiki or guide because vehicles, handling, controls, rewards and other systems may change as development continues. This site separates verified information from community observations and focuses on practical Ghost Driver gameplay, current controls, Ghost Driver codes, vehicle notes, beginner guidance and update tracking without presenting guesses as confirmed facts.</p>
          </div>
        </section>

        <section>
          <SectionHeading index="01" title="Ghost Driver codes" description="Track Ghost Driver codes and Ghost Driver Roblox code claims without relying on stale lists." action={<Link className="text-link" to="/codes" search={{ status: 'active' }}>Full code tracker <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>Players searching for <strong>Ghost Driver codes</strong> usually want a quick answer: which codes are active right now, what they reward and whether a claimed Ghost Driver Roblox code still works. Because Ghost Driver is still early in development, code availability may be inconsistent and a code mentioned in a video, social post or older guide may no longer be useful in the current build.</p>
            <p>Our Ghost Driver codes tracker is deliberately conservative. We only surface a Ghost Driver code as active when it meets our publication standard. If no verified Ghost Driver codes are available, the page says so instead of filling the list with recycled Roblox code claims. You can use the dedicated codes page for active, expired and recently checked entries as the game develops.</p>
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
              <p>This Ghost Driver gameplay video gives new players a useful picture of the game's pace. Pay attention to how quickly traffic gaps appear and disappear, how much road is visible before a lane decision, and how a small correction at speed can change the next few seconds of a run.</p>
              <p>The useful takeaway is simple: control first, speed second. A clean Ghost Driver run depends more on reading traffic and preserving an exit path than holding maximum throttle. Watching a complete run can make the controls and beginner tips below easier to understand before you launch Ghost Driver on Roblox yourself.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeading index="03" title="How to play Ghost Driver" description="Learn the controls, then build speed through repeatable high-traffic runs." />
          <div className="section-copy">
            <p>Ghost Driver uses familiar driving inputs, but the traffic-heavy format changes how you should approach them. Use W, A, S and D or the arrow keys to drive, V to change camera or enter first-person view, Shift for the handbrake and drift, and L for headlights. Learning what each input does takes only a moment; learning when to use it while traffic is closing around you is the real challenge.</p>
            <p>Start by keeping your inputs small and predictable. Look farther down the highway instead of focusing only on the vehicle directly ahead. When you see several possible gaps, favor the one that leaves another escape route if traffic changes. In Ghost Driver, a slightly slower line that keeps your options open is usually better practice than committing to a narrow gap you cannot recover from.</p>
          </div>
          <ol className="protocol-grid">
            {[
              { icon: Radio, title: 'Check the build', copy: 'Ghost Driver is pre-alpha, so controls, rewards and handling can change.' },
              { icon: Map, title: 'Read the traffic', copy: 'Look beyond the nearest car and identify two possible paths before committing to one.' },
              { icon: Gauge, title: 'Add pace slowly', copy: 'Increase speed only when your steering and braking inputs remain controlled.' },
              { icon: Flag, title: 'Review the run', copy: 'Change one input, camera choice or driving decision before the next attempt.' },
            ].map((step, index) => <li key={step.title}><span className="protocol-index" aria-hidden="true">0{index + 1}</span><step.icon /><h3>{step.title}</h3><p>{step.copy}</p></li>)}
          </ol>
        </section>

        <section className="section">
          <SectionHeading index="04" title="Ghost Driver beginner tips" description="Simple habits that make early runs easier to understand and repeat." />
          <div className="seo-copy-grid">
            <p><strong>Choose visibility before style.</strong> Test the available camera views and use the one that makes surrounding traffic easiest for you to read. First-person can feel immersive, while another view may provide more context around the car. There is no reason to force one camera while you are still learning Ghost Driver.</p>
            <p><strong>Avoid constant lane switching.</strong> Moving through every available gap may feel fast, but unnecessary corrections create more chances to lose control. Hold a useful lane until you have a clear reason to move, and make the next steering input deliberate rather than reactive.</p>
            <p><strong>Use the handbrake with purpose.</strong> Shift gives you access to the handbrake and drifting, but that does not make every traffic situation a drift opportunity. Learn ordinary steering and braking first, then experiment with the handbrake when you understand how your current vehicle responds.</p>
            <p><strong>Build consistency before records.</strong> If you crash at the same type of merge or gap repeatedly, reduce speed and solve that situation first. Ghost Driver becomes more satisfying when your runs improve because you are reading the road better, not because one risky attempt happened to work.</p>
          </div>
        </section>

        <section className="section">
          <SectionHeading index="05" title="Ghost Driver vehicles" description="Use community vehicle records while remembering that pre-alpha values can change." action={<Link className="text-link" to="/vehicles">All vehicles <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>Vehicle choice can change how Ghost Driver feels through traffic. Acceleration affects how quickly you rebuild pace, while stability and predictable response can matter when a gap closes unexpectedly. A car that feels impressive at maximum speed is not automatically the easiest choice for learning consistent traffic runs.</p>
            <p>Our Ghost Driver vehicle pages record what the community can currently verify and leave unknown fields blank rather than inventing performance numbers. When comparing vehicles, treat early values as a snapshot rather than a permanent tier list. A future Ghost Driver update may alter handling or progression, so check the individual vehicle records for the context behind each entry.</p>
          </div>
          <div className="card-grid">{data.vehicles.map((item) => <VehicleCard key={item.id} item={item} />)}</div>
        </section>

        <section className="section">
          <SectionHeading index="06" title="Ghost Driver guides and updates" description="Use focused guides for gameplay questions and the tracker for changes between builds." action={<Link className="text-link" to="/guides">Guide library <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>Our Ghost Driver guides focus on decisions that remain useful even when the pre-alpha build changes: camera control, traffic reading, braking discipline, gradual pace increases and understanding vehicle behavior. If you are new to Ghost Driver, start with the beginner guide before worrying about advanced setups or perfect runs.</p>
            <p>Because the experience is still being developed, it is also worth checking recent updates whenever something feels different. A change in handling, available vehicles or Ghost Driver codes can make an older recommendation less useful. We keep guides separate from update records so you can tell the difference between general driving advice and information tied to a particular build.</p>
          </div>
          <div className="card-grid">{data.guides.map((item, index) => <GuideCard key={item.id} item={item} featured={index === 0} />)}</div>
        </section>

        <section className="section">
          <SectionHeading index="07" title="Ghost Driver FAQ" description="Quick answers to common questions from players finding the game for the first time." />
          <div className="faq-list">
            <details>
              <summary><span>01</span>What is Ghost Driver?</summary>
              <p>Ghost Driver is a Roblox driving experience centered on navigating highway traffic at speed. The official experience is currently labeled pre-alpha, so features and game data can change during development.</p>
            </details>
            <details>
              <summary><span>02</span>Are there active Ghost Driver codes?</summary>
              <p>Use our Ghost Driver codes tracker for the current status. We do not label a Ghost Driver Roblox code as active simply because it appears on an older list; unverified claims remain unpublished until they meet our checking standard.</p>
            </details>
            <details>
              <summary><span>03</span>What are the Ghost Driver controls?</summary>
              <p>You can drive with WASD or the arrow keys. V changes the camera or first-person view, Shift controls the handbrake and drift function, and L controls the headlights. Controls may change while Ghost Driver remains in pre-alpha.</p>
            </details>
            <details>
              <summary><span>04</span>Is this the official Ghost Driver website?</summary>
              <p>No. This is an independent fan-made Ghost Driver guide and wiki. Use the Roblox button below to open the official game experience published on Roblox.</p>
            </details>
          </div>
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
            <p>Open the official Ghost Driver Roblox page by Tilted Vehicles and jump into the latest available build. After playing, return here for Ghost Driver codes, controls, vehicle records, guides and update tracking. This fan site is independent and is not affiliated with Roblox or the game developer.</p>
          </div>
          <a className="button primary roblox-button" href="https://www.roblox.com/games/137228775845999/Ghost-Driver" target="_blank" rel="noreferrer noopener">Play Ghost Driver on Roblox <ExternalLink size={17} /></a>
        </section>
      </div>
    </>
  )
}
