import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Car, Gauge, Route as RouteIcon, WalletCards } from 'lucide-react'
import { GuideCard } from '@/components/ContentCards'
import { UnofficialNotice } from '@/components/Notice'
import { PageHero } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getGuides } from '@/server/content'

export const Route = createFileRoute('/guides/')({
  loader: () => getGuides(),
  head: () => createSeo(
    'Ghost Driver Guides: Beginner, Money, Tuning & Driving Help',
    'Ghost Driver guides for Roblox players covering beginner controls, money farming, tuning, traffic cutting and song IDs with practical, version-aware advice.',
    '/guides',
  ),
  component: GuidesPage,
})

function GuidesPage() {
  const guides = Route.useLoaderData()

  return (
    <div className="container page-shell">
      <PageHero
        eyebrow="Driver briefing"
        title="Ghost Driver Guides"
        description="Practical Ghost Driver guides for learning the controls, building cleaner traffic runs, earning cash efficiently, tuning cars and checking Roblox audio IDs."
        aside={<div className="hero-stat"><strong>{guides.length.toString().padStart(2, '0')}</strong><span>field guides</span></div>}
      />

      <figure style={{ margin: '0 0 32px', overflow: 'hidden', border: '1px solid var(--outline)', borderRadius: 18, background: 'var(--surface-low)' }}>
        <img src="/ghost-driver-hero.webp" alt="Ghost Driver Roblox gameplay used throughout the Ghost Driver guides library" style={{ display: 'block', width: '100%', height: 'auto' }} />
      </figure>

      <UnofficialNotice compact />

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">01</span><h2>Choose a Ghost Driver Guide</h2></div><p>Start with the problem you are trying to solve, then move to the next guide when your baseline is stable.</p></div></div>
        <div className="card-grid guide-library">{guides.map((guide, index) => <GuideCard key={guide.id} item={guide} featured={index === 0} />)}</div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">02</span><h2>How to Use These Ghost Driver Guides</h2></div></div>
        <div className="seo-copy-grid">
          <p>These Ghost Driver guides are designed around one job per page. The beginner guide explains the controls, camera choice, traffic reading and early progression. The money guide focuses on repeatable cash per minute instead of one lucky run. The tuning guide explains how to build a baseline and test one setup change at a time. The traffic-cutting guide concentrates on closing speed, gap selection and exit paths. The song ID guide explains why Roblox audio assets can work in one experience and fail in another. Keeping those jobs separate makes each page easier to search, easier to update and easier to use while you are actually playing.</p>
          <p>The best way to use Ghost Driver guides is to test one recommendation at a time. Ghost Driver is still marked Pre-Alpha on Roblox, so handling, progression and available features can change. A guide should help you form a useful test rather than pretend every community value is permanent. If a car feels different after an update, return to a familiar road section before changing several settings. If a farming method becomes inconsistent, measure a fresh set of runs. If an audio ID stops working, recheck permissions instead of assuming the number was typed incorrectly. Version-aware advice stays useful longer than a static list of claims.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">03</span><h2>Start With the Beginner Guide</h2></div></div>
        <div className="section-copy">
          <p>For a new player, the most useful Ghost Driver guides begin with control rather than speed. The official Roblox description currently lists W, A, S and D or the arrow keys for driving, V for changing camera or first person, Shift for the handbrake or drift input, and L for headlights. Knowing the keys is only the first step. You also need to understand how quickly your car moves across a lane, how much distance it needs to slow down and which camera lets you see traffic early enough to make a calm decision. The <Link to="/guides/$slug" params={{ slug: 'beginner' }} className="text-link">Ghost Driver beginner guide <ArrowRight size={14} /></Link> turns those controls into a first-session practice plan.</p>
          <p>Our Ghost Driver guides treat clean runs as the first real benchmark. A dramatic near miss is difficult to repeat and teaches less than a route you can finish several times in a row. Once you can hold a lane, change lanes smoothly and read the next vehicle before it becomes an emergency, you have a baseline for everything else. That baseline matters because faster cars and more aggressive cuts increase the amount of information you need to process. Learn the predictable decisions first and speed becomes easier to add later.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">04</span><h2>Progress With Money and Tuning Guides</h2></div></div>
        <div className="protocol-grid">
          <Link to="/guides/$slug" params={{ slug: 'money' }}><article style={{ padding: 25 }}><WalletCards size={26} /><h3>Money Farming</h3><p>Measure total cash per minute, include failed runs and spend only when an upgrade removes a real bottleneck.</p></article></Link>
          <Link to="/guides/$slug" params={{ slug: 'tuning' }}><article style={{ padding: 25 }}><Gauge size={26} /><h3>Tuning</h3><p>Keep a stock or known baseline, change one variable, repeat the same test and keep only measurable improvements.</p></article></Link>
          <Link to="/cars"><article style={{ padding: 25 }}><Car size={26} /><h3>Cars</h3><p>Compare the current vehicle database before using your saved cash on another car.</p></article></Link>
          <Link to="/codes"><article style={{ padding: 25 }}><BookOpen size={26} /><h3>Codes</h3><p>Check verified active codes before a long progression session so available cash rewards are not missed.</p></article></Link>
        </div>
        <div className="section-copy" style={{ marginTop: 24 }}>
          <p>Progression-focused Ghost Driver guides should answer two different questions: how to earn more efficiently and how to avoid wasting what you earn. The money farming page uses cash per minute as the main comparison because a high-risk route can look profitable until resets are included. The tuning page uses a baseline method because changing several settings at once makes it impossible to know what actually improved the car. Together, these Ghost Driver guides create a simple progression loop: drive a repeatable route, identify the biggest limitation, spend against that limitation and then retest under the same conditions.</p>
          <p>That loop is especially useful during Pre-Alpha. Prices, balance and handling can move while the game is being developed, so a permanent “best farming route” or “perfect setup” is difficult to guarantee. Ghost Driver guides should therefore explain the decision process behind a recommendation. If an update changes one part of the game, you can rerun the process instead of waiting for someone else to publish another fixed list.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">05</span><h2>Improve Traffic Cutting</h2></div></div>
        <div className="section-copy">
          <p>Traffic cutting is the core skill emphasized by the official game description, so it deserves its own place in the Ghost Driver guides library. The <Link to="/guides/$slug" params={{ slug: 'driving' }} className="text-link">traffic cutting guide <ArrowRight size={14} /></Link> focuses on seeing the move before making the move. Instead of aiming only at the nearest open space, check what sits beyond the first gap and preserve another lane as an escape route whenever possible. Closing speed matters just as much as distance because a visually large gap can disappear quickly when you are travelling much faster than surrounding traffic.</p>
          <p>These Ghost Driver guides do not treat braking as a failure. A short reduction in speed can create a new timing window and preserve a profitable run. The same principle applies to aggressive lane-change combinations: stabilize the car before beginning the next cut, then increase speed only when the sequence remains repeatable. This creates cleaner high-speed driving than using the handbrake as an emergency correction every time a gap closes.</p>
        </div>
        <figure style={{ margin: '24px 0 0 36px', overflow: 'hidden', border: '1px solid var(--outline)', borderRadius: 16, background: 'var(--surface-low)' }}>
          <img src="/guides/traffic-reading.svg" alt="Traffic reading diagram from the Ghost Driver guides library" loading="lazy" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </figure>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">06</span><h2>Check Song IDs Carefully</h2></div></div>
        <div className="section-copy">
          <p>The audio page is different from the driving-focused Ghost Driver guides because Roblox asset permissions can change outside the game itself. A numeric audio ID may exist and still be unavailable to Ghost Driver because the asset is private, moderated or not permitted for the experience. The <Link to="/guides/$slug" params={{ slug: 'song-ids' }} className="text-link">song IDs guide <ArrowRight size={14} /></Link> therefore explains a verification process instead of publishing a huge untested music list. A smaller list with recent status information is more useful than dozens of copied IDs that never worked in the game.</p>
          <p>That same verification principle applies across all Ghost Driver guides on this site. We separate official information from community estimates, date content when possible and avoid presenting Pre-Alpha values as permanent facts. If you find an outdated instruction, use the contact page to report it. Keeping Ghost Driver guides current is more valuable than preserving an old answer after the game has changed.</p>
        </div>
      </section>

      <section className="section">
        <div className="roblox-cta">
          <div><p className="eyebrow"><span />Next step</p><h2>Build Your Own Learning Route</h2><p>Start with one Ghost Driver guide, practice one measurable skill, then use the related car, code and update pages when you need more context. The goal of this Ghost Driver guides hub is to reduce guesswork and give every new test a clear purpose.</p></div>
          <Link className="button primary roblox-button" to="/guides/$slug" params={{ slug: 'beginner' }}><RouteIcon size={18} />Start Beginner Guide</Link>
        </div>
      </section>
    </div>
  )
}
