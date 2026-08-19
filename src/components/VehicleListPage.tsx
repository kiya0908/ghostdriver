import { Link } from '@tanstack/react-router'
import { VehicleCard } from './ContentCards'
import { DataCaution, UnofficialNotice } from './Notice'
import { PageHero } from './PageHero'
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

      {active === 'all' && <>
        <section className="stat-strip" aria-label="Cars database summary">
          <div><strong>{items.length}</strong><span>tracked cars</span></div>
          <div><strong>{limitedCount}</strong><span>limited</span></div>
          <div><strong>{freeCount}</strong><span>free / reported free</span></div>
          <div><strong>{recentCount}</strong><span>recent additions</span></div>
        </section>

        <section className="content-section">
          <p className="micro-label">GHOST DRIVER CARS OVERVIEW</p>
          <h2>Ghost Driver cars, prices and garage progression</h2>
          <p>The Ghost Driver cars database is designed for players who want one place to compare the vehicles currently being tracked across the Roblox game. Ghost Driver is still evolving, which makes a normal static car list unreliable: new cars appear, limited cars rotate, community names can differ from the in-game label, and performance values can change after updates. Instead of pretending every field is known, this page separates confirmed car identity from price, availability and performance data.</p>
          <p>That matters because most players are not simply asking “what cars are in Ghost Driver?” They also want to know which Ghost Driver cars are free, which ones are limited, what a car costs, whether a newer car is worth saving for, and which cars are strong enough to appear in a best-cars or tier-list discussion. The database below is the central hub for those questions. Each card keeps the strongest data we currently have while making uncertain fields obvious.</p>
          <p>For the current tracked roster, the strongest independent evidence supports names such as Wulfbrecht RZ7, Weinchen V120, Kitsuni LX, Rangy Helly, Castellani Specchiera, Reinhardt RT32 and Takama F10 GT. We also track vehicles identified in current Ghost Driver gameplay and update coverage such as the BMW M3 G80, BMW M140i, Audi R8 and a Corvette C7. Some exact prices and performance values are still incomplete, but the vehicle identity itself can be more reliable than a speculative full spec sheet.</p>
        </section>

        <section className="content-section">
          <p className="micro-label">EXPLORE THE GARAGE</p>
          <h2>Browse Ghost Driver car guides by intent</h2>
          <div className="card-grid">
            <article className="guide-card"><p className="micro-label">RANKINGS</p><h3>Best Ghost Driver Cars</h3><p>Compare the strongest currently ranked cars and see how the evolving Ghost Driver car tier list is built.</p><Link className="text-link" to="/cars/best">View best cars & tier list →</Link></article>
            <article className="guide-card"><p className="micro-label">LATEST</p><h3>New Ghost Driver Cars</h3><p>See recent additions and update-era vehicles without assuming every new car is permanently available.</p><Link className="text-link" to="/cars/new">View new cars →</Link></article>
            <article className="guide-card"><p className="micro-label">ZERO-COST</p><h3>Free Ghost Driver Cars</h3><p>Track starter cars, reported group rewards and other vehicles that may be obtainable without a normal purchase.</p><Link className="text-link" to="/cars/free">View free cars →</Link></article>
            <article className="guide-card"><p className="micro-label">ROTATIONS</p><h3>Limited Ghost Driver Cars</h3><p>Check limited and showroom-related records, including cars that may no longer be in the current rotation.</p><Link className="text-link" to="/cars/limited">View limited cars →</Link></article>
          </div>
        </section>
      </>}

      <nav className="filter-tabs" aria-label="Filter Ghost Driver cars">
        <Link className={active === 'all' ? 'active' : ''} to="/cars">All cars</Link>
        <Link to="/cars/new">New cars</Link>
        <Link className={active === 'free' ? 'active' : ''} to="/cars/free">Free cars</Link>
        <Link className={active === 'limited' ? 'active' : ''} to="/cars/limited">Limited cars</Link>
        <Link to="/cars/best">Best cars & tier list</Link>
      </nav>

      <div className="card-grid">{items.map((item) => <VehicleCard key={item.id} item={item} />)}</div>

      {active === 'all' ? <>
        <section className="content-section">
          <p className="micro-label">CHOOSING A CAR</p>
          <h2>How to choose the right Ghost Driver car</h2>
          <p>The most expensive Ghost Driver car is not automatically the right purchase. Highway traffic driving rewards more than headline speed. A car that reaches a higher maximum speed can still be difficult to use if the steering response, acceleration delivery or general balance does not match the way you drive. For a new player, a predictable car that makes it easier to read traffic and recover from small mistakes can be more useful than a high-end car that demands sharper inputs.</p>
          <p>Start with your goal. If you are trying to progress efficiently, price and acquisition method matter as much as performance. A free car or starter-oriented vehicle can save Cash while you learn the game. If your goal is high-speed traffic runs, acceleration and stability become more important. If you are collecting rare vehicles, limited availability may matter more than raw performance. The <Link to="/cars/free">free cars guide</Link>, <Link to="/cars/limited">limited cars tracker</Link> and <Link to="/cars/best">best cars page</Link> break those different intents into separate pages.</p>
          <p>It is also worth considering upgrade potential. Community discussions often compare cars using fully tuned numbers, but that can be misleading if one player is looking at a stock car and another is talking about a maxed build. Where we have a stock or tuned figure with enough evidence, we label it separately. Otherwise we avoid blending the two into one number.</p>
        </section>

        <section className="content-section">
          <p className="micro-label">PRICE & PROGRESSION</p>
          <h2>Ghost Driver car prices and when to save your Cash</h2>
          <p>Car price is one of the most useful fields in a Ghost Driver database because it connects directly to progression. The problem is that price is also one of the easiest values for fan pages to copy from an old build and leave unchanged. Our approach is to publish a number only when there is a reasonable source trail. For example, the Kitsuni LX has been reported at $45,000, while the Takama F10 GT has been reported at $350,000. Those values are useful, but they are still presented with the data-quality context attached to the car rather than as permanent official prices.</p>
          <p>If a card says “Not confirmed,” it does not mean the vehicle has no price. It means we do not have enough current evidence to publish the exact number confidently. That distinction is more useful than filling every row with a figure that may be stale. Before spending a large amount of Cash, always confirm the dealership screen in the current Ghost Driver build.</p>
          <p>For progression, avoid draining your balance simply because a car is newer or more expensive. A good upgrade should solve a problem: stronger acceleration, easier control, better high-speed stability, or access to a style of driving you actually want. If the car is limited, the decision can become harder because availability creates pressure. The <Link to="/cars/limited">limited Ghost Driver cars page</Link> is designed to separate the fact that a car has been limited from the separate question of whether it is still on sale now.</p>
        </section>

        <section className="content-section">
          <p className="micro-label">PERFORMANCE</p>
          <h2>Top speed, acceleration and handling in Ghost Driver</h2>
          <p>Top speed is the easiest car statistic to compare, but it is not enough to describe how useful a Ghost Driver car feels in traffic. A car may be capable of a very high speed on an open section while requiring more space to correct a bad line. Another car may have a lower headline number but make it easier to move through traffic because its responses are more predictable.</p>
          <p>Acceleration matters because Ghost Driver runs rarely happen at one constant speed. Recovering speed after braking, building pace after a traffic slowdown and getting back into a fast section can all change how effective a car feels. Handling is even harder to reduce to one number because community ratings can be subjective. That is why we currently avoid manufacturing handling or acceleration scores when a comparable measurement method is not available.</p>
          <p>The Takama F10 GT is an example of the difference between identity confidence and spec confidence. Its game name and limited status have stronger independent support, while the reported $350,000 price and 215 MPH stock / 278 MPH tuned speeds come from community or competitor data. Those numbers can still help players, but they should not be presented as if the game developers published a permanent official specification sheet.</p>
        </section>

        <section className="content-section">
          <p className="micro-label">NEW & LIMITED</p>
          <h2>New cars and limited cars are not the same thing</h2>
          <p>A common source of confusion is treating “new,” “limited” and “currently available” as the same status. They describe different things. A new Ghost Driver car is a recent addition or a vehicle associated with a newer update. A limited car has evidence of time-sensitive or restricted availability. A car can be both new and limited, but it can also be new and permanently available, or limited but no longer new.</p>
          <p>Our <Link to="/cars/new">new cars page</Link> groups recent additions such as the cars currently flagged from recent update coverage, while the <Link to="/cars/limited">limited cars page</Link> focuses on availability history. This avoids a common SEO-wiki problem where old limited drops remain labelled as “current” long after the showroom has changed.</p>
        </section>

        <section className="content-section">
          <p className="micro-label">FREE CARS</p>
          <h2>Free and starter cars in Ghost Driver</h2>
          <p>Free Ghost Driver cars deserve their own page because “free” can mean several different things. A vehicle might be available as a starter option, a group reward, a donated vehicle, a pack inclusion or another non-standard acquisition. Those methods are not interchangeable. The BMW M140i, for example, is independently confirmed as a vehicle in Ghost Driver, while its commonly reported free/group-reward acquisition still needs stronger direct confirmation. The Weinchen V120 is also referenced in starter-oriented coverage, but the exact requirement remains something we treat cautiously.</p>
          <p>That is why the <Link to="/cars/free">free Ghost Driver cars guide</Link> separates vehicle identity from unlock method. A car can be confidently identified while the “how to get it free” instruction remains provisional. This prevents an outdated community claim from turning into a false step-by-step instruction.</p>
        </section>

        <section className="content-section">
          <p className="micro-label">TUNING</p>
          <h2>How tuning changes car comparisons</h2>
          <p>Tuning makes Ghost Driver car comparisons more complicated because stock and upgraded cars can behave very differently. If two players report different top speeds, one may be describing a base vehicle while the other is describing a heavily upgraded build. When possible, this database keeps stock and tuned figures separate instead of collapsing them into one “max speed” field.</p>
          <p>For practical driving, tuning should be tested on a familiar route. Change one variable, repeat the same type of run and decide whether the car became easier or harder to control. A setup that produces a larger speed number but makes traffic transitions less predictable may not actually improve your results. For deeper setup advice, use the <Link to="/guides/$slug" params={{ slug: 'tuning' }}>Ghost Driver tuning guide</Link>.</p>
        </section>

        <section className="content-section">
          <p className="micro-label">DATA METHOD</p>
          <h2>How this Ghost Driver cars database is verified</h2>
          <p>Ghost Driver does not currently provide a simple public master spreadsheet containing every car, price and performance value, so building a useful database requires source comparison. We prioritize direct game UI, clearly identifiable Ghost Driver gameplay, official or developer-published information and independent guides that visibly refer to the game. Community wikis are useful for discovering candidate vehicles and possible stats, but a value copied between several fan sites is not automatically independent confirmation.</p>
          <p>Every car record therefore has a verification date and a data-quality signal. “Confirmed” generally means the vehicle identity has credible independent support. It does not automatically mean every statistic in that row is confirmed. Community-estimate values may still be displayed when they are useful and specific, but the wording makes that status clear. Missing exact values are shown as unconfirmed rather than replaced with invented numbers.</p>
          <p>This method can make the page look less complete than a wiki that publishes a full spec sheet for every vehicle, but it creates a database that is easier to maintain as Ghost Driver changes. When stronger evidence appears, the underlying data file can be updated without rewriting the entire page.</p>
        </section>

        <section className="content-section">
          <p className="micro-label">FAQ</p>
          <h2>Ghost Driver cars FAQ</h2>
          <div className="faq-list">
            <details><summary>What is the best car in Ghost Driver?</summary><p>The current answer depends on budget, driving style and the latest build. The Takama F10 GT currently has one of the strongest high-tier signals in our tracked dataset, while the Audi R8 is also treated as a strong high-end candidate. See the <Link to="/cars/best">best Ghost Driver cars tier list</Link> for the current ranking method.</p></details>
            <details><summary>What are the newest cars in Ghost Driver?</summary><p>Recent tracked additions include several cars associated with newer update coverage, including the Takama F10 GT, Audi R8, BMW M3 G80, Castellani Specchiera and Reinhardt RT32. Visit <Link to="/cars/new">Ghost Driver new cars</Link> for the current recent-vehicle list.</p></details>
            <details><summary>Are there free cars in Ghost Driver?</summary><p>Yes, community and independent sources reference starter or free-style acquisitions. Because the exact requirement can change or be described inconsistently, we maintain a separate <Link to="/cars/free">free cars page</Link> that distinguishes confirmed car identity from the reported unlock method.</p></details>
            <details><summary>How do limited cars work?</summary><p>Limited vehicles can be tied to a time-sensitive showroom or rotation. A car that was limited in a previous update may not be purchasable today. Check the current game before buying and use the <Link to="/cars/limited">limited cars tracker</Link> for the recorded status.</p></details>
            <details><summary>Why are some Ghost Driver car stats missing?</summary><p>Because we do not publish exact numbers just to make every card look complete. When a current price, acceleration score or other value cannot be supported well enough, the field remains unconfirmed until stronger evidence is available.</p></details>
          </div>
        </section>
      </> : <section className="content-section">
        <p className="micro-label">HOW TO READ THIS PAGE</p>
        <h2>{active === 'limited' ? 'How Ghost Driver limited cars are tracked' : 'How Ghost Driver free cars are verified'}</h2>
        {active === 'limited' ? <><p>Limited cars can appear through time-sensitive dealership or showroom rotations. Availability can change between updates, so a Limited badge describes the strongest current evidence we have rather than a promise that the car is purchasable at this exact moment.</p><p>Before spending currency, confirm the current showroom in-game. We keep previously observed limited cars in the database because players still search for their names, builds and possible return rotations. You can also compare recent additions on the <Link to="/cars/new">new cars page</Link> or return to <Link to="/cars">all Ghost Driver cars</Link>.</p></> : <><p>Ghost Driver has cars described by independent or community sources as free, starter, donated or group rewards. Those labels are easy to confuse, so this page separates confirmed vehicle identity from the unlock method. If the requirement has not been reproduced directly, the card says so.</p><p>A free car is not automatically the best long-term car. Compare acquisition cost, upgrade path and current driving goals before replacing a starter vehicle. For broader comparisons, use the <Link to="/cars/best">best cars tier list</Link> or browse <Link to="/cars">all Ghost Driver cars</Link>.</p></>}
      </section>}
    </div>
  )
}
