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
    'Ghost Driver Wiki: Codes, Cars & Roblox Guides',
    'Ghost Driver Roblox wiki with Ghost Driver codes, cars, beginner guides, traffic-cutting tips, gameplay video and update tracking for the pre-alpha driving game.',
  ),
  component: HomePage,
})

function HomePage() {
  const data = Route.useLoaderData()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ghost Driver Wiki',
    description: 'An independent fan-made Ghost Driver Roblox wiki covering Ghost Driver codes, cars, beginner guides, traffic-cutting tips and updates.',
    inLanguage: 'en',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow"><span />PRE-ALPHA FIELD MANUAL</p>
            <h1>GHOST DRIVER<br /><em>ROBLOX WIKI.</em></h1>
            <p>Ghost Driver is a Roblox driving game built around high-speed highway runs, traffic cutting, car progression and the challenge of staying in control as the road gets faster. Use this independent Ghost Driver wiki to check Ghost Driver codes, compare cars, learn the controls and improve your next run.</p>
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
            <p>Ghost Driver is still evolving, so vehicle values, rewards, controls and Ghost Driver Roblox code availability may change between builds.</p>
          </div>
        </div>
      </section>

      <div className="container page-shell home-content">
        <section className="seo-intro">
          <p className="eyebrow"><span />GHOST DRIVER OVERVIEW</p>
          <h2>What is Ghost Driver on Roblox?</h2>
          <div className="seo-copy-grid">
            <p><strong>Ghost Driver</strong> is a Roblox highway driving experience from Tilted Vehicles. Instead of following a traditional racing circuit, much of the challenge comes from moving through dense traffic at speed, finding safe gaps, controlling your car and improving each run. Going fast is only part of Ghost Driver; successful runs also depend on reading traffic early and knowing when a gap is too risky.</p>
            <p>The basic Ghost Driver progression loop is simple: get a car, learn how it accelerates and brakes, build more consistent traffic runs, earn Cash, explore more vehicles and gradually attempt faster traffic cutting. Because Ghost Driver remains in pre-alpha, this wiki separates verified information from community observations and avoids filling missing values with guesses.</p>
          </div>
        </section>

        <section>
          <SectionHeading index="01" title="Latest Ghost Driver codes" description="Track Ghost Driver codes and Ghost Driver Roblox code claims without relying on stale lists." action={<Link className="text-link" to="/codes" search={{ status: 'active' }}>Full code tracker <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>Ghost Driver codes are one of the easiest things to check before a new session. A working Ghost Driver Roblox code may provide free in-game rewards that can help with early progression, especially while you are still building your first garage. Because Roblox game codes can expire or change after updates, always check the latest status before trying one in-game.</p>
            <p>Our Ghost Driver codes tracker separates active, expired and unverified claims instead of presenting every code found online as working. If no verified Ghost Driver codes are available, the page says so rather than filling the list with recycled Roblox code claims.</p>
          </div>
          {data.codes.length ? <div className="code-list">{data.codes.map((item) => <CodeCard key={item.id} item={item} />)}</div> : <EmptyState title="No verified active codes"><span>We found community claims, but no Ghost Driver code met our publication standard. Check back after the next official announcement.</span></EmptyState>}
        </section>

        <section className="section">
          <SectionHeading index="02" title="How to play Ghost Driver" description="Start with control, then build speed through repeatable high-traffic runs." />
          <div className="section-copy">
            <p>Your first Ghost Driver sessions should be about control rather than maximum speed. Spend a few runs learning how your current car responds before worrying about the fastest vehicle. Pay attention to acceleration, braking distance, steering response and how quickly the car changes direction.</p>
            <p>Repeatedly driving the same stretch of highway makes traffic easier to read. You begin to recognize where you normally brake, where traffic becomes difficult and how much room you need before attempting a pass. Once your Ghost Driver runs become consistent, increase speed gradually instead of forcing risky gaps.</p>
          </div>
          <ol className="protocol-grid">
            {[
              { icon: Radio, title: 'Learn your car', copy: 'Understand acceleration, braking and steering before chasing maximum speed.' },
              { icon: Map, title: 'Read the traffic', copy: 'Look beyond the nearest car and identify an exit before entering a narrow gap.' },
              { icon: Gauge, title: 'Add pace slowly', copy: 'Increase speed only when your steering and braking inputs remain controlled.' },
              { icon: Flag, title: 'Review the run', copy: 'Change one driving decision or setup choice before the next attempt.' },
            ].map((step, index) => <li key={step.title}><span className="protocol-index" aria-hidden="true">0{index + 1}</span><step.icon /><h3>{step.title}</h3><p>{step.copy}</p></li>)}
          </ol>
        </section>

        <section className="section video-section">
          <SectionHeading index="03" title="Watch Ghost Driver gameplay" description="See highway driving, traffic cutting and the pace of a real Ghost Driver run." />
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
              <p>This Ghost Driver gameplay video shows the rhythm of highway driving before you jump into the game yourself. Watch how quickly traffic gaps appear and disappear, how much road is visible before a lane decision and how small corrections can affect the next few seconds of a run.</p>
              <p>The useful takeaway is simple: control first, speed second. A clean Ghost Driver run depends more on reading traffic and preserving an exit path than holding maximum throttle.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeading index="04" title="How to earn Cash in Ghost Driver" description="Build reliable runs first, then use rewards to expand your garage." />
          <div className="seo-copy-grid">
            <p>Cash determines how quickly you can move beyond your starting options and explore more of the Ghost Driver garage. For new players, the best approach is usually not to chase the most difficult possible run immediately. Focus on repeatable driving that you can complete consistently.</p>
            <p>Ghost Driver codes are also worth checking whenever you play. When an active code offers Cash or another useful reward, it can reduce some of the early grind. A practical progression path is: check active codes, build consistent runs, earn Cash, improve your garage and then attempt faster traffic cutting.</p>
          </div>
        </section>

        <section className="section">
          <SectionHeading index="05" title="Ghost Driver cars and vehicle progression" description="Compare community records while remembering that pre-alpha values can change." action={<Link className="text-link" to="/vehicles">All vehicles <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>Cars are a major part of Ghost Driver, but the fastest vehicle is not automatically the best choice for every player. Acceleration, handling, braking, stability, price and driving style can all affect how useful a car feels on the highway. Beginners may benefit more from predictable handling, while experienced players may prefer cars that reward aggressive high-speed driving.</p>
            <p>When choosing your next Ghost Driver car, ask whether you can control it, whether it is worth the Cash and whether it fits the way you drive. Our Ghost Driver vehicle pages collect available community information and clearly mark unknown or unverified values rather than inventing performance numbers.</p>
          </div>
          <div className="card-grid">{data.vehicles.map((item) => <VehicleCard key={item.id} item={item} />)}</div>
        </section>

        <section className="section">
          <SectionHeading index="06" title="Ghost Driver traffic cutting and No Hesi tips" description="Read farther ahead, keep an exit path and make smoother decisions at speed." />
          <div className="seo-copy-grid">
            <p><strong>Look ahead instead of only at the nearest car.</strong> The best Ghost Driver traffic decisions happen before you reach the gap. Identify several possible paths and know where the car needs to go after the first lane change.</p>
            <p><strong>Do not force every opening.</strong> No Hesi-style driving rewards confidence, but confidence should come from understanding the road and your vehicle. A gap that leaves no exit can end a run even when the first move looks possible.</p>
            <p><strong>Keep steering inputs smooth.</strong> Constant corrections create more opportunities to lose control. Hold a useful lane until you have a clear reason to move, then make the next input deliberately.</p>
            <p><strong>Increase speed after consistency.</strong> Higher speed gives you less reaction time. Build clean Ghost Driver runs first, then add pace once braking points and lane choices stop feeling like guesses.</p>
          </div>
        </section>

        <section className="section">
          <SectionHeading index="07" title="Ghost Driver tuning and upgrades" description="Change one thing at a time so you can tell what actually improves the car." />
          <div className="section-copy">
            <p>Once you understand your vehicle, tuning and upgrades become another way to shape the Ghost Driver experience. Avoid changing every setting at once. If several values move together, it becomes difficult to know which adjustment actually improved or hurt the car.</p>
            <p>Use a familiar section of road as a baseline, change one setting, then compare the result. For traffic cutting, predictable response can matter more than impressive performance numbers. A setup that is technically faster but harder to place between traffic may not improve your real Ghost Driver runs.</p>
          </div>
        </section>

        <section className="section">
          <SectionHeading index="08" title="Popular Ghost Driver guides" description="Choose the guide that matches what you want to improve next." action={<Link className="text-link" to="/guides">Guide library <ChevronRight size={15} /></Link>} />
          <div className="section-copy">
            <p>If you are new to Ghost Driver, start with the beginner guide to learn the basic gameplay loop, controls and road awareness. If you are already comfortable with the basics, use the vehicle, driving and progression guides to answer more specific questions.</p>
            <p>Because Ghost Driver is still being developed, it is also worth checking recent updates whenever something feels different. A change in handling, rewards, vehicles or Ghost Driver codes can make an older recommendation less useful.</p>
          </div>
          <div className="card-grid">{data.guides.map((item, index) => <GuideCard key={item.id} item={item} featured={index === 0} />)}</div>
        </section>

        <section className="section">
          <SectionHeading index="09" title="Ghost Driver FAQ" description="Quick answers to common questions from players finding the game for the first time." />
          <div className="faq-list">
            <details>
              <summary><span>01</span>What is Ghost Driver?</summary>
              <p>Ghost Driver is a Roblox highway driving experience from Tilted Vehicles centered on high-speed traffic cutting, cars and progression. The official experience is currently labeled pre-alpha, so features and game data can change during development.</p>
            </details>
            <details>
              <summary><span>02</span>Are there active Ghost Driver codes?</summary>
              <p>Use our Ghost Driver codes tracker for the current status. We do not label a Ghost Driver Roblox code as active simply because it appears on an older list; unverified claims remain unpublished until they meet our checking standard.</p>
            </details>
            <details>
              <summary><span>03</span>How do I get better at Ghost Driver?</summary>
              <p>Start by learning one car and one section of road. Build consistent runs before increasing speed, look farther ahead in traffic, make smoother steering inputs and review what caused each failed run.</p>
            </details>
            <details>
              <summary><span>04</span>What is the best car in Ghost Driver?</summary>
              <p>There is no single Ghost Driver car that is automatically best for every player. The right choice depends on the current build, your budget and whether you value acceleration, handling, stability or another characteristic.</p>
            </details>
            <details>
              <summary><span>05</span>Is this the official Ghost Driver website?</summary>
              <p>No. This is an independent fan-made Ghost Driver wiki and is not affiliated with Roblox, Tilted Vehicles or the official Ghost Driver development team.</p>
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
            <p>Open the official Ghost Driver Roblox page by Tilted Vehicles and jump into the latest available build. After playing, return here for Ghost Driver codes, cars, beginner guides, driving tips and update tracking.</p>
          </div>
          <a className="button primary roblox-button" href="https://www.roblox.com/games/137228775845999/Ghost-Driver" target="_blank" rel="noreferrer noopener">Play Ghost Driver on Roblox <ExternalLink size={17} /></a>
        </section>
      </div>
    </>
  )
}
