import { createFileRoute, Link } from '@tanstack/react-router'
import { Code2, ExternalLink, Keyboard } from 'lucide-react'
import { CodeCard } from '@/components/ContentCards'
import { DataCaution, EmptyState, UnofficialNotice } from '@/components/Notice'
import { PageHero, SectionHeading } from '@/components/PageHero'
import { createSeo } from '@/lib/seo'
import { getCodes } from '@/server/content'
import type { CodeStatus } from '@/types/content'

const statuses: CodeStatus[] = ['active', 'pre-alpha', 'expired']

export const Route = createFileRoute('/codes')({
  validateSearch: (search: Record<string, unknown>) => ({
    status: statuses.includes(search.status as CodeStatus) ? (search.status as CodeStatus) : 'active',
  }),
  loaderDeps: ({ search }) => ({ status: search.status }),
  loader: ({ deps }) => getCodes({ data: deps.status }),
  head: () => createSeo('Ghost Driver Codes', 'Track active, Pre-Alpha and expired Ghost Driver Roblox codes with dates and transparent verification status.', '/codes'),
  component: CodesPage,
})

function CodesPage() {
  const items = Route.useLoaderData()
  const { status } = Route.useSearch()
  return (
    <div className="container page-shell">
      <PageHero eyebrow="Reward signal" title="Ghost Driver Codes" description="A verification-first code tracker. If we cannot confirm a code, we do not present it as working." aside={<div className="hero-stat"><strong>{items.length.toString().padStart(2, '0')}</strong><span>{status} codes in current view</span></div>} />
      <UnofficialNotice compact />
      <DataCaution />
      <nav className="filter-tabs" aria-label="Filter codes">
        <Link to="/codes" search={{ status: 'active' }} activeProps={{ className: status === 'active' ? 'active' : '' }}>Active</Link>
        <Link to="/codes" search={{ status: 'pre-alpha' }} activeProps={{ className: status === 'pre-alpha' ? 'active' : '' }}>Pre-Alpha</Link>
        <Link to="/codes" search={{ status: 'expired' }} activeProps={{ className: status === 'expired' ? 'active' : '' }}>Expired</Link>
      </nav>
      {items.length ? <div className="code-list">{items.map((item) => <CodeCard key={item.id} item={item} />)}</div> : <EmptyState title={`No ${status} codes to publish`}><span>We are monitoring public developer channels. This list stays empty until a code can be checked without inventing a reward or status.</span></EmptyState>}

      <section className="section redeem-layout">
        <div>
          <SectionHeading index="01" title="How to redeem" description="The exact menu can change during Pre-Alpha; use this as a safe general path." />
          <ol className="numbered-steps">
            <li><span>01</span><div><h3>Launch a current server</h3><p>Open Ghost Driver from Roblox and wait for the game interface to finish loading.</p></div></li>
            <li><span>02</span><div><h3>Find the code entry</h3><p>Look in the main menu or settings for a Codes, Gift or Redeem control.</p></div></li>
            <li><span>03</span><div><h3>Paste exactly</h3><p>Use the copy button and preserve capitalization, punctuation and spacing.</p></div></li>
            <li><span>04</span><div><h3>Read the result</h3><p>If it fails, check whether it expired, was already redeemed, or requires a newer server.</p></div></li>
          </ol>
        </div>
        <aside className="source-panel"><Code2 /><h2>Source standard</h2><p>We prioritize developer announcements and direct in-game checks. Third-party reports are treated as leads, not proof.</p><div><Keyboard size={17} /><span>Codes may be case-sensitive</span></div><div><ExternalLink size={17} /><span>No fake “working” status</span></div></aside>
      </section>
    </div>
  )
}
