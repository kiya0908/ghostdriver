import { createFileRoute, Link } from '@tanstack/react-router'
import { AlertTriangle, CheckCircle2, Code2, ExternalLink, Gift, Keyboard, RefreshCw } from 'lucide-react'
import { CodeCard } from '@/components/ContentCards'
import { EmptyState, UnofficialNotice } from '@/components/Notice'
import { PageHero, SectionHeading } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getCodes } from '@/server/content'
import type { CodeStatus } from '@/types/content'

const statuses: CodeStatus[] = ['active', 'pre-alpha', 'expired']
const lastChecked = 'August 19, 2026'

export const Route = createFileRoute('/codes')({
  validateSearch: (search: Record<string, unknown>) => ({
    status: statuses.includes(search.status as CodeStatus) ? (search.status as CodeStatus) : 'active',
  }),
  loaderDeps: ({ search }) => ({ status: search.status }),
  loader: ({ deps }) => getCodes({ data: deps.status }),
  head: () => createSeo(
    'Ghost Driver Codes (August 2026) – Active Roblox Codes',
    'Latest Ghost Driver codes for Roblox, updated August 2026. Copy active Ghost Driver Roblox codes, claim free cash, and learn how to redeem codes that still work.',
    '/codes',
  ),
  component: CodesPage,
})

function CodesPage() {
  const items = Route.useLoaderData()
  const { status } = Route.useSearch()

  return (
    <div className="container page-shell">
      <PageHero
        eyebrow="Updated August 2026"
        title="Ghost Driver Codes (August 2026)"
        description="Looking for working Ghost Driver codes? This page tracks the latest Ghost Driver Roblox codes, puts active codes first, and explains exactly how to redeem them for free in-game cash."
        aside={
          <div className="hero-stat">
            <strong>{status === 'active' ? items.length.toString().padStart(2, '0') : items.length.toString().padStart(2, '0')}</strong>
            <span>{status} codes · checked {lastChecked}</span>
          </div>
        }
      />

      <UnofficialNotice compact />

      <section className="section" aria-labelledby="working-codes">
        <SectionHeading
          index="01"
          title="Working Ghost Driver Codes"
          description={`These Ghost Driver codes were listed as active by ghostdriverroblox.wiki when we checked on ${lastChecked}. Codes can expire without warning, so redeem them as soon as possible.`}
        />

        <div className="source-panel" style={{ marginBottom: '1.25rem' }}>
          <CheckCircle2 />
          <h2 id="working-codes">Latest active list</h2>
          <p><strong>Current active codes:</strong> THANKSFOR1MIL, SINCEROWASHERE, and SORRYFORLATE. SORRYFORLATE is reported to give 10,000 Cash; the other two are listed as free cash rewards.</p>
          <div><RefreshCw size={17} /><span>Last checked: {lastChecked}</span></div>
          <div><ExternalLink size={17} /><span>Code source: ghostdriverroblox.wiki/codes/</span></div>
        </div>

        <nav className="filter-tabs" aria-label="Filter Ghost Driver codes">
          <Link to="/codes" search={{ status: 'active' }} activeProps={{ className: status === 'active' ? 'active' : '' }}>Active</Link>
          <Link to="/codes" search={{ status: 'pre-alpha' }} activeProps={{ className: status === 'pre-alpha' ? 'active' : '' }}>Pre-Alpha</Link>
          <Link to="/codes" search={{ status: 'expired' }} activeProps={{ className: status === 'expired' ? 'active' : '' }}>Expired</Link>
        </nav>

        {items.length ? (
          <div className="code-list">{items.map((item) => <CodeCard key={item.id} item={item} />)}</div>
        ) : (
          <EmptyState title={`No ${status} codes in the current list`}>
            <span>Switch back to Active to see the latest working Ghost Driver Roblox codes. We only add expired or Pre-Alpha entries when there is enough public information to label them accurately.</span>
          </EmptyState>
        )}
      </section>

      <section className="section redeem-layout" aria-labelledby="redeem-codes">
        <div>
          <SectionHeading index="02" title="How to Redeem Ghost Driver Codes" description="Redeeming a Ghost Driver code only takes a few steps inside Roblox." />
          <ol className="numbered-steps" id="redeem-codes">
            <li><span>01</span><div><h3>Launch Ghost Driver on Roblox</h3><p>Open the Ghost Driver experience and wait for your car and the full game interface to load. Using a current server is useful when a new Roblox code has just been released.</p></div></li>
            <li><span>02</span><div><h3>Open the Shop</h3><p>Select the Shop button in the lower-left area of the game interface. Ghost Driver code redemption is handled inside the game rather than on a separate website.</p></div></li>
            <li><span>03</span><div><h3>Find Rewards or Codes</h3><p>Open the Rewards or Codes section in the Shop menu. The exact wording can change as Ghost Driver receives updates, but this is where the redemption field is located.</p></div></li>
            <li><span>04</span><div><h3>Paste the code exactly</h3><p>Copy one of the active Ghost Driver codes above and paste it into the field. Keep the same spelling and capitalization, then press Redeem and watch your cash balance for the reward.</p></div></li>
          </ol>
        </div>
        <aside className="source-panel">
          <Code2 />
          <h2>Quick redemption tips</h2>
          <p>If a newly released Ghost Driver Roblox code does not work, try copying it again and joining a fresh server before assuming it has expired.</p>
          <div><Keyboard size={17} /><span>Copy codes exactly as shown</span></div>
          <div><Gift size={17} /><span>Each code is normally redeemable once per account</span></div>
        </aside>
      </section>

      <section className="section" aria-labelledby="not-working">
        <SectionHeading index="03" title="Why Is My Ghost Driver Code Not Working?" description="A failed redemption does not always mean the code is fake." />
        <div className="redeem-layout">
          <div id="not-working">
            <p>There are several common reasons a Ghost Driver code may fail. The most common is a typing error. Roblox code fields often require the code to match exactly, so an extra space, missing letter, or changed capitalization can stop redemption. The safest approach is to use the copy button above rather than typing a code manually.</p>
            <p>A code may also have expired since our last check. Ghost Driver codes are controlled by the game developer and can be disabled at any time, including between major updates or after a limited reward period ends. If a code was released very recently, an older server may not recognize it yet; rejoining the game can sometimes solve that issue.</p>
            <p>Finally, most promotional codes can only be redeemed once per Roblox account. If you already claimed the reward, entering the same code again will not add more cash.</p>
          </div>
          <aside className="source-panel">
            <AlertTriangle />
            <h2>Check these first</h2>
            <p>Wrong spelling, an expired code, an older server, or a code already redeemed on your account are the most likely causes.</p>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="new-codes">
        <SectionHeading index="04" title="Where to Find New Ghost Driver Codes" description="New codes usually appear around updates, milestones, downtime compensation, or community announcements." />
        <div id="new-codes">
          <p>The fastest way to catch new Ghost Driver codes is to watch the game developer's official community channels and check this page after a Ghost Driver update. Codes such as <strong>SORRYFORLATE</strong> show why update and downtime announcements matter: developers often use Roblox codes to compensate players or celebrate activity milestones.</p>
          <p>For players who do not want to monitor several channels, bookmark this Ghost Driver codes page. We keep the working list near the top so you can immediately see what is active instead of scrolling through a long guide first. When a code is no longer reported as working, it can be moved out of the active list rather than leaving an outdated reward at the top of the page.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="code-cash">
        <SectionHeading index="05" title="What Can You Do With Ghost Driver Code Cash?" description="Free code cash helps shorten the early grind and gives you more room to experiment with cars and upgrades." />
        <div id="code-cash">
          <p>Ghost Driver is built around driving, earning cash, improving your vehicle, and progressing toward better cars. A working Ghost Driver Roblox code gives you extra money without requiring additional runs first. That makes code rewards especially useful for new players who want to reach meaningful upgrades sooner.</p>
          <p>After redeeming your codes, compare the <a href="/vehicles">Ghost Driver vehicles</a> before spending everything immediately. You can also use our <a href="/guides">Ghost Driver guides</a> for progression and gameplay advice, then check <a href="/updates">Ghost Driver updates</a> when a patch changes rewards, cars, or other mechanics.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-codes">
        <SectionHeading index="06" title="Ghost Driver Codes FAQ" description="Quick answers to the most common Ghost Driver code questions." />
        <div className="numbered-steps" id="faq-codes">
          <div><h3>What are the latest Ghost Driver codes?</h3><p>As of {lastChecked}, the active list we are using from ghostdriverroblox.wiki includes THANKSFOR1MIL, SINCEROWASHERE, and SORRYFORLATE.</p></div>
          <div><h3>What does SORRYFORLATE give in Ghost Driver?</h3><p>SORRYFORLATE is reported to reward 10,000 Cash. Redeem it as soon as possible because the developer can expire Roblox codes without advance notice.</p></div>
          <div><h3>Are Ghost Driver codes free?</h3><p>Yes. Ghost Driver codes are promotional rewards entered inside the Roblox experience. You should not need to pay another website to obtain or redeem a public code.</p></div>
          <div><h3>Do Ghost Driver codes expire?</h3><p>They can. Some codes remain available for a long period while others are tied to an update, milestone, apology, or limited event. That is why this page shows a last-checked date.</p></div>
          <div><h3>Can I redeem a Ghost Driver code more than once?</h3><p>Normally, a promotional code can only be claimed once per Roblox account. Re-entering a code you already used will not normally grant the reward again.</p></div>
          <div><h3>How often are new Ghost Driver Roblox codes released?</h3><p>There is no fixed schedule. New codes are most likely around game updates, milestones, community events, or compensation for downtime, so checking after a new update is a practical habit.</p></div>
        </div>
      </section>

      <section className="section" aria-labelledby="related-guides">
        <SectionHeading index="07" title="More Ghost Driver Guides" description="Use your code rewards with the rest of the Ghost Driver wiki." />
        <div id="related-guides">
          <p><a href="/vehicles">Browse Ghost Driver cars and vehicles</a> · <a href="/guides">Read Ghost Driver gameplay guides</a> · <a href="/updates">Check the latest Ghost Driver updates</a> · <a href="/faq">Visit the Ghost Driver FAQ</a></p>
        </div>
      </section>
    </div>
  )
}
