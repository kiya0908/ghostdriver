import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Car, CircleAlert, Clock3, GitCommitHorizontal, RefreshCw, Route as RouteIcon, TicketCheck } from 'lucide-react'
import { UnofficialNotice } from '@/components/Notice'
import { PageHero } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getUpdates } from '@/server/content'

export const Route = createFileRoute('/updates')({
  loader: () => getUpdates(),
  head: () => createSeo(
    'Ghost Driver Updates: Latest Roblox Update & Patch Notes',
    'Track Ghost Driver updates, Roblox game status, new cars, codes, gameplay changes and verified patch notes without mixing community wiki edits with official releases.',
    '/updates',
  ),
  component: UpdatesPage,
})

function UpdatesPage() {
  const updates = Route.useLoaderData()

  return (
    <div className="container page-shell">
      <PageHero
        eyebrow="Update radar"
        title="Ghost Driver Updates"
        description="Follow Ghost Driver updates, confirmed game changes, new cars, codes and patch-note evidence while keeping community wiki changes separate from official Roblox releases."
        aside={<div className="hero-stat"><strong>{updates.length.toString().padStart(2, '0')}</strong><span>tracked entries</span></div>}
      />

      <figure style={{ margin: '0 0 32px', overflow: 'hidden', border: '1px solid var(--outline)', borderRadius: 18, background: 'var(--surface-low)' }}>
        <img src="/ghost-driver-hero.webp" alt="Ghost Driver Roblox gameplay for the Ghost Driver updates tracker" style={{ display: 'block', width: '100%', height: 'auto' }} />
      </figure>

      <UnofficialNotice compact />

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">01</span><h2>Latest Ghost Driver Update Status</h2></div><p>What is confirmed right now, before reading individual Ghost Driver update entries.</p></div></div>
        <div className="seo-copy-grid">
          <p>Ghost Driver updates are especially important while the Roblox experience is still presented as Pre-Alpha. In an early development stage, cars, handling, progression, traffic behavior, prices, rewards and interface details can change faster than a traditional finished game. That is why this Ghost Driver updates page is built as a verification hub rather than a list of rumors. The official Roblox game page is the first place we check for current public status. At the time this page was prepared, the experience description still identified Ghost Driver as Pre-Alpha and encouraged players to like and favorite the game for more updates and new cars.</p>
          <p>The official description also says the next massive Ghost Driver update is tied to a 1,000-like milestone. That is useful evidence of developer intent, but it is not the same as a dated release announcement. We therefore do not invent a release date, version number or feature list before the developer publishes one. When a Ghost Driver update becomes verifiable, this page will record the date, the source and the practical effect on players. Until then, milestone language is treated as an upcoming-update signal rather than completed patch notes.</p>
        </div>
        <div className="protocol-grid" style={{ marginTop: 24 }}>
          <article style={{ padding: 25 }}><Clock3 size={26} /><h3>Current stage</h3><p>Ghost Driver is publicly described as Pre-Alpha, so every balance value should be treated as version-sensitive.</p></article>
          <article style={{ padding: 25 }}><RefreshCw size={26} /><h3>Update signal</h3><p>The Roblox description points to another large Ghost Driver update at the stated community-like milestone.</p></article>
          <article style={{ padding: 25 }}><CircleAlert size={26} /><h3>No invented notes</h3><p>If a Ghost Driver update cannot be sourced, we label the information as unconfirmed instead of turning speculation into patch notes.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">02</span><h2>What We Track in Ghost Driver Updates</h2></div></div></div>
        <div className="section-copy">
          <p>A useful Ghost Driver update log should answer more than “did the game update?” Every meaningful release can affect several parts of the experience at once. New cars can change progression priorities. Handling changes can make an old tuning recommendation less useful. Cash changes can alter the best farming method. Traffic changes can affect which gaps are safe at high speed. New codes can change the fastest way to fund an early purchase. Because these systems connect to one another, our Ghost Driver updates tracker checks the rest of the site whenever a confirmed game change appears.</p>
          <p>We focus on player-visible Ghost Driver updates: new vehicles, limited vehicles, free cars, map or highway changes, traffic behavior, driving physics, camera behavior, drifting, handbrake behavior, economy changes, cash rewards, progression, interface changes, Roblox audio support, codes, events and bug fixes. A tiny backend deployment that produces no visible difference may not need its own entry. A small handling change can deserve an entry if it changes how players should drive or tune a car. The goal is to make Ghost Driver updates useful for actual decisions inside the game.</p>
        </div>
        <div className="protocol-grid" style={{ marginTop: 24 }}>
          <Link to="/cars"><article style={{ padding: 25 }}><Car size={26} /><h3>Cars and availability</h3><p>Check whether a Ghost Driver update adds vehicles, changes availability or affects free and limited car records.</p><span className="text-link">Browse cars <ArrowRight size={14} /></span></article></Link>
          <Link to="/codes" search={{ status: 'active' }}><article style={{ padding: 25 }}><TicketCheck size={26} /><h3>Codes and rewards</h3><p>New Ghost Driver updates sometimes create new reasons to recheck active Roblox codes and reward status.</p><span className="text-link">Check codes <ArrowRight size={14} /></span></article></Link>
          <Link to="/guides"><article style={{ padding: 25 }}><RouteIcon size={26} /><h3>Guides and strategies</h3><p>When a Ghost Driver update changes driving or progression, version-aware guides need to be reviewed too.</p><span className="text-link">Open guides <ArrowRight size={14} /></span></article></Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">03</span><h2>How Ghost Driver Update Information Is Verified</h2></div></div></div>
        <div className="seo-copy-grid">
          <p>Ghost Driver updates can spread through community posts before clear patch notes exist, so source quality matters. We start with the official Roblox experience page and developer-controlled announcements when they are available. Those sources can confirm whether the game description changed, whether a milestone was announced, whether a new car was promoted or whether the developer explicitly described a release. We then compare those claims with visible in-game behavior before writing a strong factual statement. A Ghost Driver update entry should make it obvious which part is confirmed and which part is still being tested.</p>
          <p>Community videos, screenshots and discussions can be useful for discovering a possible Ghost Driver update, especially when a small change is not documented formally. They are secondary evidence, not automatic proof. One player may be on an older server, a private test, a temporary event state or a different device configuration. For that reason, we avoid presenting a single unsourced screenshot as a complete Ghost Driver update. When evidence is incomplete, the safest label is “unconfirmed” until another reliable source or repeatable in-game observation supports it.</p>
        </div>
        <div className="section-copy" style={{ marginTop: 24 }}>
          <p>This verification process also protects older Ghost Driver updates from becoming misleading. If a later release reverses an earlier balance change, the old entry can remain as historical context while the newest entry explains the current state. That is more useful than silently rewriting history. Players can see when a change happened and why an older video, car tier list or guide may no longer match the present build.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">04</span><h2>Ghost Driver Update Log</h2></div><p>Confirmed game updates and site-tracking changes are labelled separately.</p></div></div>
        <div className="timeline">
          {updates.map((item) => (
            <article key={item.id}>
              <div className="timeline-marker"><GitCommitHorizontal /></div>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-card"><span>{item.version}</span><h3>{item.title}</h3>{item.content.map((line) => <p key={line}>{line}</p>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">05</span><h2>What to Check After a New Ghost Driver Update</h2></div></div></div>
        <div className="section-copy">
          <p>After a new Ghost Driver update goes live, do not assume your previous setup is automatically wrong. First, repeat a familiar run with a familiar car. Watch acceleration, braking distance, steering response, drift behavior and how quickly traffic gaps close. If the car feels different, change one variable at a time. This makes it much easier to separate a real Ghost Driver update from a bad run, a different server or a setup change you forgot about.</p>
          <p>Next, check progression. A Ghost Driver update that changes car prices, reward rates or available codes can shift the most efficient purchase path even when handling is unchanged. Compare the <Link to="/cars" className="text-link">car database <ArrowRight size={14} /></Link> with the <Link to="/codes" search={{ status: 'active' }} className="text-link">active Ghost Driver codes <ArrowRight size={14} /></Link>. If the update adds a limited vehicle, verify whether it has a deadline, special requirement or event source before spending cash elsewhere. If a code appears with the update, redeem it before relying on a farming estimate that does not include the reward.</p>
          <p>Finally, revisit the relevant Ghost Driver guides. A driving update may change traffic-cutting timing. A tuning update may invalidate a setup copied from an older version. An economy update may change which farming route is worth repeating. Keeping Ghost Driver updates connected to guides is more valuable than treating patch notes as isolated news. The point is not only to know that something changed, but to understand what you should do differently because of that change.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">06</span><h2>Ghost Driver Updates vs. Wiki Updates</h2></div></div></div>
        <div className="seo-copy-grid">
          <p>There is an important difference between Ghost Driver updates and updates to this community website. A Ghost Driver update changes the Roblox experience itself. A wiki update changes our pages, records, guides, layout or verification notes. The two can happen on the same day, but they should never be presented as the same event. For example, adding a new car record to our database is a wiki change unless the car itself was just released in Ghost Driver. Correcting a typo in a guide is also not a game patch.</p>
          <p>This distinction is why the first tracked entry on the timeline is clearly labelled as a community tracker launch rather than an official Ghost Driver update. As the project grows, the timeline can contain both types of entries while keeping the label visible. That lets readers use the page as a history of what changed without accidentally attributing a website edit to the game developers. Clear sourcing is especially important for Ghost Driver updates while the game is still in Pre-Alpha and official patch-note detail may vary from release to release.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><div className="section-title-row"><span className="section-index">07</span><h2>Ghost Driver Update FAQ</h2></div></div></div>
        <div className="faq-grid">
          <article><h3>What is the latest Ghost Driver update?</h3><p>We only name a latest Ghost Driver update when a release can be verified from reliable evidence. The official Roblox page currently presents the game as Pre-Alpha and points to another massive update at its stated like milestone, but that milestone message does not provide a confirmed release date or complete patch list.</p></article>
          <article><h3>How often does Ghost Driver update?</h3><p>There is no fixed update schedule we can verify from the current public game description. During Pre-Alpha, Ghost Driver updates may arrive irregularly. This page therefore tracks confirmed changes by date rather than promising a weekly or monthly cadence.</p></article>
          <article><h3>Do Ghost Driver updates add new cars?</h3><p>The official description asks players to like and favorite the experience for more updates and new cars, so vehicles are clearly part of the developer's public update messaging. When a new vehicle is confirmed, we also review the car database and related guides.</p></article>
          <article><h3>Are community rumors included as patch notes?</h3><p>No. Possible Ghost Driver updates can be investigated, but rumors are not promoted to confirmed patch notes without enough evidence. If a claim is useful but not verified, it should be labelled accordingly.</p></article>
          <article><h3>Where should I look after a Ghost Driver update?</h3><p>Start with this update log, then check <Link to="/cars" className="text-link">cars <ArrowRight size={14} /></Link>, <Link to="/codes" search={{ status: 'active' }} className="text-link">codes <ArrowRight size={14} /></Link> and <Link to="/guides" className="text-link">guides <ArrowRight size={14} /></Link> for the systems most likely to have changed.</p></article>
          <article><h3>Is this the official Ghost Driver update page?</h3><p>No. This is an independent community tracker. Official developer information should always take priority when it exists, and our entries are written to preserve that distinction.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="roblox-cta">
          <div><p className="eyebrow"><span />Stay version-aware</p><h2>Use Ghost Driver Updates With the Rest of the Wiki</h2><p>When the next Ghost Driver update arrives, verify what changed here, then move into cars, codes and guides to see how the release affects your next run.</p></div>
          <Link className="button primary roblox-button" to="/guides"><RouteIcon size={18} />Browse Ghost Driver Guides</Link>
        </div>
      </section>
    </div>
  )
}
