import { createFileRoute, Link } from '@tanstack/react-router'
import { InfoPage } from '@/components/InfoPage'
import { createSeo } from '@/lib/seo'

export const Route = createFileRoute('/about')({ head: () => createSeo('About This Fan Wiki', 'Learn how the independent Ghost Driver Wiki verifies data, handles unknowns and stays separate from official developers.', '/about'), component: AboutPage })

function AboutPage() {
  return <InfoPage eyebrow="Project identity" title="Built by Players, Not the Developers" description="Ghost Driver Wiki is an independent field manual designed to make changing Pre-Alpha information easier to verify and use." showNotice={false}>
    <section><h2>Our purpose</h2><p>We organize the questions players ask most: which codes work, what is known about each vehicle, how to begin, and what changed. The site is built for fast lookup on mobile and for search engines to read without client-side JavaScript.</p></section>
    <section className="legal-highlight"><h2>Full unofficial disclaimer</h2><p>This is a fan-made, unofficial website about the Roblox game Ghost Driver. We are not affiliated with, endorsed by, or connected to Tilted Vehicles, Roblox Corporation, or the official Ghost Driver developers in any way. All game content, trademarks, and assets belong to their respective owners.</p></section>
    <section><h2>How we handle evidence</h2><p>Developer announcements and direct in-game observations have priority. Community reports can start a review, but they are not automatically treated as confirmed. Records include verification dates, and unknown values are labelled rather than guessed.</p></section>
    <section><h2>Corrections and ownership</h2><p>Game names, marks and content remain the property of their respective owners. If a factual record is wrong or you are a rights holder with a concern, please use our <Link to="/contact">Contact page</Link> with enough detail to review the issue.</p></section>
  </InfoPage>
}
