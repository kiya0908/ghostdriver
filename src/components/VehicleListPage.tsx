import { Link } from '@tanstack/react-router'
import { VehicleCard } from './ContentCards'
import { DataCaution, UnofficialNotice } from './Notice'
import { PageHero, SectionHeading } from './PageHero'
import type { Vehicle } from '@/types/content'

export function VehicleListPage({ title, description, items, active }: { title: string; description: string; items: Vehicle[]; active: 'all' | 'free' | 'limited' }) {
  const limitedCount = items.filter((item) => item.isLimited).length
  const freeCount = items.filter((item) => item.isFree).length
  const recentCount = items.filter((item) => item.isNew).length

  return (
    <div className="container page-shell">
      <PageHero eyebrow="Ghost Driver cars database" title={title} description={description} aside={<div className="hero-stat"><strong>{items.length.toString().padStart(2, '0')}</strong><span>tracked cars</span></div>} />
      <UnofficialNotice compact />
      <DataCaution />

      {active === 'all' && (
        <>
          <section className="section" aria-labelledby="cars-overview">
            <SectionHeading index="01" title="Ghost Driver Cars Overview" description="A verified-first database for car names, prices, availability and performance data." />
            <div className="source-panel" style={{ marginBottom: '1.5rem' }}>
              <h2 id="cars-overview">Current database snapshot</h2>
              <p>We currently track {items.length} Ghost Driver cars, including {limitedCount} limited records, {freeCount} free or reported-free cars, and {recentCount} recent additions. Exact values are only shown when there is enough evidence to make them useful.</p>
            </div>
            <div className="section-copy">
              <p>The Ghost Driver cars database is designed for players who want one place to compare the cars currently being tracked across the Roblox game. Ghost Driver is still evolving, which makes a normal static car list unreliable: new cars appear, limited cars rotate, community names can differ from the in-game label, and performance values can change after updates. Instead of pretending every field is known, this page separates confirmed car identity from price, availability and performance data.</p>
              <p>That matters because most players are not simply asking “what cars are in Ghost Driver?” They also want to know which Ghost Driver cars are free, which ones are limited, what a car costs, whether a newer car is worth saving for, and which cars are strong enough to appear in a best-cars or tier-list discussion. The database below is the central hub for those questions. Each car card keeps the strongest data we currently have while making uncertain fields obvious.</p>
              <p>For the current tracked roster, the strongest independent evidence supports names such as Wulfbrecht RZ7, Weinchen V120, Kitsuni LX, Rangy Helly, Castellani Specchiera, Reinhardt RT32 and Takama F10 GT. We also track cars identified in current Ghost Driver gameplay and update coverage such as the BMW M3 G80, BMW M140i, Audi R8 and a Corvette C7. Some exact prices and performance values are still incomplete, but the car identity itself can be more reliable than a speculative full spec sheet.</p>
            </div>
          </section>

          <section className="section" aria-labelledby="car-guides">
            <SectionHeading index="02" title="Explore Ghost Driver Car Guides" description="Jump directly to rankings, new releases, free cars or limited cars." />
            <div className="card-grid" id="car-guides">
              <article className="guide-card"><p className="micro-label">RANKINGS</p><h3>Best Ghost Driver Cars</h3><p>Compare the strongest currently ranked cars and see how the evolving Ghost Driver car tier list is built.</p><Link className="text-link" to="/cars/best">View best cars & tier list →</Link></article>
              <article className="guide-card"><p className="micro-label">LATEST</p><h3>New Ghost Driver Cars</h3><p>See recent additions and update-era cars without assuming every new car is permanently available.</p><Link className="text-link" to="/cars/new">View new cars →</Link></article>
              <article className="guide-card"><p className="micro-label">ZERO-COST</p><h3>Free Ghost Driver Cars</h3><p>Track starter cars, reported group rewards and other cars that may be obtainable without a normal purchase.</p><Link className="text-link" to="/cars/free">View free cars →</Link></article>
              <article className="guide-card"><p className="micro-label">ROTATIONS</p><h3>Limited Ghost Driver Cars</h3><p>Check limited and showroom-related records, including cars that may no longer be in the current rotation.</p><Link className="text-link" to="/cars/limited">View limited cars →</Link></article>
            </div>
          </section>
        </>
      )}

      <section className="section" aria-labelledby="car-database">
        <SectionHeading
          index={active === 'all' ? '03' : '01'}
          title={active === 'all' ? 'Ghost Driver Cars Database' : active === 'free' ? 'Ghost Driver Free Cars List' : 'Ghost Driver Limited Cars List'}
          description={active === 'all' ? 'Browse every currently tracked car and compare the strongest verified data we have.' : active === 'free' ? 'Cars reported as free, starter or group-reward options, with unlock claims clearly separated from confirmed identity.' : 'Limited and showroom-related cars, with historical limited status separated from current availability.'}
        />
        <nav className="filter-tabs" aria-label="Filter Ghost Driver cars">
          <Link className={active === 'all' ? 'active' : ''} to="/cars">All cars</Link>
          <Link to="/cars/new">New cars</Link>
          <Link className={active === 'free' ? 'active' : ''} to="/cars/free">Free cars</Link>
          <Link className={active === 'limited' ? 'active' : ''} to="/cars/limited">Limited cars</Link>
          <Link to="/cars/best">Best cars & tier list</Link>
        </nav>
        <div className="card-grid" id="car-database">{items.map((item) => <VehicleCard key={item.id} item={item} />)}</div>
      </section>

      {active === 'all' ? (
        <>
          <section className="section" aria-labelledby="choose-car">
            <SectionHeading index="04" title="How to Choose the Right Ghost Driver Car" description="Price, control and upgrade potential matter as much as headline speed." />
            <div className="redeem-layout">
              <div className="section-copy" id="choose-car">
                <p>The most expensive Ghost Driver car is not automatically the right purchase. Highway traffic driving rewards more than headline speed. A car that reaches a higher maximum speed can still be difficult to use if the steering response, acceleration delivery or general balance does not match the way you drive. For a new player, a predictable car that makes it easier to read traffic and recover from small mistakes can be more useful than a high-end car that demands sharper inputs.</p>
                <p>Start with your goal. If you are trying to progress efficiently, price and acquisition method matter as much as performance. A free car or starter-oriented car can save Cash while you learn the game. If your goal is high-speed traffic runs, acceleration and stability become more important. If you are collecting rare cars, limited availability may matter more than raw performance.</p>
                <p>It is also worth considering upgrade potential. Community discussions often compare cars using fully tuned numbers, but that can be misleading if one player is looking at a stock car and another is talking about a maxed build. Where we have a stock or tuned figure with enough evidence, we label it separately. Otherwise we avoid blending the two into one number.</p>
              </div>
              <aside className="source-panel">
                <h2>Choose by goal</h2>
                <p><Link to="/cars/free">Free cars</Link> for low-cost progression, <Link to="/cars/best">best cars</Link> for rankings, <Link to="/cars/new">new cars</Link> for recent additions, and <Link to="/cars/limited">limited cars</Link> for time-sensitive records.</p>
              </aside>
            </div>
          </section>

          <section className="section" aria-labelledby="car-prices">
            <SectionHeading index="05" title="Ghost Driver Car Prices and Progression" description="Use price as a progression signal, not as proof that a car is automatically better." />
            <div className="section-copy" id="car-prices">
              <p>Car price is one of the most useful fields in a Ghost Driver cars database because it connects directly to progression. The problem is that price is also one of the easiest values for fan pages to copy from an old build and leave unchanged. Our approach is to publish a number only when there is a reasonable source trail. For example, the Kitsuni LX has been reported at $45,000, while the Takama F10 GT has been reported at $350,000. Those values are useful, but they are still presented with the data-quality context attached to the car rather than as permanent official prices.</p>
              <p>If a card does not show an exact price, it does not mean the car has no price. It means we do not have enough current evidence to publish the exact number confidently. That distinction is more useful than filling every row with a figure that may be stale. Before spending a large amount of Cash, confirm the dealership screen in the current Ghost Driver build.</p>
              <p>For progression, avoid draining your balance simply because a car is newer or more expensive. A good upgrade should solve a problem: stronger acceleration, easier control, better high-speed stability, or access to a style of driving you actually want. If the car is limited, the decision can become harder because availability creates pressure.</p>
            </div>
          </section>

          <section className="section" aria-labelledby="car-performance">
            <SectionHeading index="06" title="Top Speed, Acceleration and Handling" description="Performance numbers only make sense when stock, tuned and community-reported values are kept separate." />
            <div className="section-copy" id="car-performance">
              <p>Top speed is the easiest car statistic to compare, but it is not enough to describe how useful a Ghost Driver car feels in traffic. A car may be capable of a very high speed on an open section while requiring more space to correct a bad line. Another car may have a lower headline number but make it easier to move through traffic because its responses are more predictable.</p>
              <p>Acceleration matters because Ghost Driver runs rarely happen at one constant speed. Recovering speed after braking, building pace after a traffic slowdown and getting back into a fast section can all change how effective a car feels. Handling is even harder to reduce to one number because community ratings can be subjective. That is why we avoid manufacturing handling or acceleration scores when a comparable measurement method is not available.</p>
              <p>The Takama F10 GT is a useful example. Its game name and limited status have stronger independent support, while the reported $350,000 price and 215 MPH stock / 278 MPH tuned speeds come from community or competitor data. Those numbers can still help players, but they should not be presented as if the developers published a permanent official specification sheet.</p>
            </div>
          </section>

          <section className="section" aria-labelledby="new-limited">
            <SectionHeading index="07" title="New Cars vs Limited Cars" description="Recent release, limited status and current availability are three different things." />
            <div className="seo-copy-grid" id="new-limited">
              <p>A common source of confusion is treating “new,” “limited” and “currently available” as the same status. They describe different things. A new Ghost Driver car is a recent addition or a car associated with a newer update. A limited car has evidence of time-sensitive or restricted availability.</p>
              <p>A car can be both new and limited, but it can also be new and permanently available, or limited but no longer new. Our <Link to="/cars/new">new cars page</Link> groups recent additions, while the <Link to="/cars/limited">limited cars page</Link> focuses on availability history. This avoids leaving an old limited drop labelled as “current” long after the showroom changes.</p>
            </div>
          </section>

          <section className="section" aria-labelledby="free-cars">
            <SectionHeading index="08" title="Free and Starter Cars in Ghost Driver" description="Free can mean starter, group reward, pack inclusion or another non-standard acquisition path." />
            <div className="section-copy" id="free-cars">
              <p>Free Ghost Driver cars deserve their own page because “free” can mean several different things. A car might be available as a starter option, a group reward, a donated car, a pack inclusion or another non-standard acquisition. Those methods are not interchangeable. The BMW M140i, for example, is independently confirmed as a car in Ghost Driver, while its commonly reported free/group-reward acquisition still needs stronger direct confirmation.</p>
              <p>The Weinchen V120 is also referenced in starter-oriented coverage, but the exact requirement remains something we treat cautiously. That is why the <Link to="/cars/free">free Ghost Driver cars guide</Link> separates car identity from unlock method. A car can be confidently identified while the “how to get it free” instruction remains provisional.</p>
            </div>
          </section>

          <section className="section" aria-labelledby="car-tuning">
            <SectionHeading index="09" title="How Tuning Changes Car Comparisons" description="Stock and tuned cars should never be treated as the same data point." />
            <div className="section-copy" id="car-tuning">
              <p>Tuning makes Ghost Driver car comparisons more complicated because stock and upgraded cars can behave very differently. If two players report different top speeds, one may be describing a base car while the other is describing a heavily upgraded build. When possible, this database keeps stock and tuned figures separate instead of collapsing them into one “max speed” field.</p>
              <p>For practical driving, tuning should be tested on a familiar route. Change one variable, repeat the same type of run and decide whether the car became easier or harder to control. A setup that produces a larger speed number but makes traffic transitions less predictable may not actually improve your results. For deeper setup advice, use the <Link to="/guides/$slug" params={{ slug: 'tuning' }}>Ghost Driver tuning guide</Link>.</p>
            </div>
          </section>

          <section className="section" aria-labelledby="verification-method">
            <SectionHeading index="10" title="How We Verify Ghost Driver Car Data" description="Confirmed car identity and confirmed specifications are deliberately treated as separate evidence levels." />
            <div className="redeem-layout">
              <div className="section-copy" id="verification-method">
                <p>Ghost Driver does not currently provide a simple public master spreadsheet containing every car, price and performance value, so building a useful database requires source comparison. We prioritize direct game UI, clearly identifiable Ghost Driver gameplay, official or developer-published information and independent guides that visibly refer to the game. Community wikis are useful for discovering candidate cars and possible stats, but a value copied between several fan sites is not automatically independent confirmation.</p>
                <p>Every car record therefore has a verification date and a data-quality signal. “Confirmed” generally means the car identity has credible independent support. It does not automatically mean every statistic in that row is confirmed. Community-estimate values may still be displayed when they are useful and specific, but the wording makes that status clear.</p>
                <p>This method can make the page look less complete than a wiki that publishes a full spec sheet for every car, but it creates a database that is easier to maintain as Ghost Driver changes. When stronger evidence appears, the underlying data file can be updated without rewriting the entire page.</p>
              </div>
              <aside className="source-panel"><h2>Verification rule</h2><p>Known values are shown. Community estimates are labelled. Missing values are omitted instead of being replaced with invented numbers.</p></aside>
            </div>
          </section>

          <section className="section" aria-labelledby="cars-faq">
            <SectionHeading index="11" title="Ghost Driver Cars FAQ" description="Quick answers to the most common Ghost Driver car questions." />
            <div className="numbered-steps" id="cars-faq">
              <div><h3>What is the best car in Ghost Driver?</h3><p>The answer depends on budget, driving style and the latest build. The Takama F10 GT currently has one of the strongest high-tier signals in our tracked dataset, while the Audi R8 is also treated as a strong high-end candidate. See the <Link to="/cars/best">best Ghost Driver cars tier list</Link>.</p></div>
              <div><h3>What are the newest cars in Ghost Driver?</h3><p>Recent tracked additions include cars associated with newer update coverage, including the Takama F10 GT, Audi R8, BMW M3 G80, Castellani Specchiera and Reinhardt RT32. Visit <Link to="/cars/new">Ghost Driver new cars</Link>.</p></div>
              <div><h3>Are there free cars in Ghost Driver?</h3><p>Yes, community and independent sources reference starter or free-style acquisitions. The <Link to="/cars/free">free cars page</Link> distinguishes confirmed car identity from the reported unlock method.</p></div>
              <div><h3>How do limited cars work?</h3><p>Limited cars can be tied to a time-sensitive showroom or rotation. A car that was limited in a previous update may not be purchasable today. Use the <Link to="/cars/limited">limited cars tracker</Link> for recorded status.</p></div>
              <div><h3>Why are some car stats missing?</h3><p>Because we do not publish exact numbers just to make every card look complete. When a current price, acceleration score or other value cannot be supported well enough, the field remains omitted until stronger evidence is available.</p></div>
            </div>
          </section>
        </>
      ) : (
        <section className="section" aria-labelledby="subpage-method">
          <SectionHeading index="02" title={active === 'limited' ? 'How Ghost Driver Limited Cars Are Tracked' : 'How Ghost Driver Free Cars Are Verified'} description={active === 'limited' ? 'Limited status and current showroom availability are tracked separately.' : 'Confirmed car identity and reported free unlock methods are tracked separately.'} />
          <div className="section-copy" id="subpage-method">
            {active === 'limited' ? <><p>Limited cars can appear through time-sensitive dealership or showroom rotations. Availability can change between updates, so a Limited badge describes the strongest current evidence we have rather than a promise that the car is purchasable at this exact moment.</p><p>Before spending currency, confirm the current showroom in-game. We keep previously observed limited cars in the database because players still search for their names, builds and possible return rotations. You can also compare recent additions on the <Link to="/cars/new">new cars page</Link> or return to <Link to="/cars">all Ghost Driver cars</Link>.</p></> : <><p>Ghost Driver has cars described by independent or community sources as free, starter, donated or group rewards. Those labels are easy to confuse, so this page separates confirmed car identity from the unlock method. If the requirement has not been reproduced directly, the card says so.</p><p>A free car is not automatically the best long-term car. Compare acquisition cost, upgrade path and current driving goals before replacing a starter car. Return to <Link to="/cars">all Ghost Driver cars</Link> or compare the <Link to="/cars/best">best cars tier list</Link>.</p></>}
          </div>
        </section>
      )}
    </div>
  )
}
