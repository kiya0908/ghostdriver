import { createFileRoute, Link } from '@tanstack/react-router'
import { InfoPage } from '@/components/InfoPage'
import { createSeo } from '@/lib/seo'

export const Route = createFileRoute('/terms')({ head: () => createSeo('Terms of Use', 'Terms for using the independent Ghost Driver Wiki, including accuracy, intellectual property and affiliation disclaimers.', '/terms'), component: TermsPage })

function TermsPage() {
  return <InfoPage eyebrow="Legal / 02" title="Terms of Use" description="Effective August 18, 2026. By using this site, you agree to these terms.">
    <section><h2>1. Informational use</h2><p>Ghost Driver Wiki provides community-maintained information for personal, non-commercial reference. You may use the site only in a lawful way and must not attempt to disrupt, scrape abusively, bypass security, or misrepresent the site as official.</p></section>
    <section className="legal-highlight"><h2>2. No official affiliation</h2><p>This is a fan-made, unofficial website about the Roblox game Ghost Driver. We are not affiliated with, endorsed by, or connected to Tilted Vehicles, Roblox Corporation, or the official Ghost Driver developers in any way. All game content, trademarks, and assets belong to their respective owners.</p></section>
    <section><h2>3. Accuracy and changing game data</h2><p>Ghost Driver is in Pre-Alpha. Codes, vehicle data, controls, prices and mechanics may change without notice. We aim to label verification dates and uncertainty, but we do not guarantee that any record is complete, current, or error-free. Confirm important decisions in the game.</p></section>
    <section><h2>4. No transactions or credentials</h2><p>This site does not sell Robux, accounts, codes, or virtual items. Never send us a Roblox password, authentication token, payment credential, or other secret. We are not responsible for third-party offers reached through external links.</p></section>
    <section><h2>5. Intellectual property</h2><p>Original site writing, layout, and code may be protected by their respective rights. Roblox, Ghost Driver, Tilted Vehicles, game assets, and related marks belong to their respective owners. References are used for identification and commentary, not to claim ownership or endorsement.</p></section>
    <section><h2>6. Availability and liability</h2><p>The site is provided “as is” and “as available,” to the extent permitted by law. We may correct, remove, or reorganize content at any time. We are not liable for losses arising from reliance on outdated game information or unavailable third-party services.</p></section>
    <section><h2>7. Questions</h2><p>For a rights, accuracy, or terms question, use the <Link to="/contact">Contact page</Link>.</p></section>
  </InfoPage>
}
