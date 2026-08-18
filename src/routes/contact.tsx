import { createFileRoute } from '@tanstack/react-router'
import { Mail, ShieldCheck } from 'lucide-react'
import { InfoPage } from '@/components/InfoPage'
import { siteConfig } from '@/config/site'
import { createSeo } from '@/lib/seo'

export const Route = createFileRoute('/contact')({ head: () => createSeo('Contact', 'Contact the independent Ghost Driver Wiki about corrections, privacy, rights, or community data.', '/contact'), component: ContactPage })

function ContactPage() {
  return <InfoPage eyebrow="Editorial channel" title="Contact the Wiki" description="Send focused, source-backed corrections. Never send Roblox passwords, session tokens, payment details, or other secrets.">
    <section className="contact-card"><Mail /><div><p className="micro-label">EDITORIAL EMAIL</p><h2><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></h2><p>For factual corrections, rights-holder requests, privacy questions, and accessibility reports.</p></div></section>
    <section><h2>What to include</h2><ul><li>The exact page URL and field or paragraph concerned.</li><li>What you believe is wrong and the corrected information.</li><li>A public developer source or clear in-game evidence when possible.</li><li>For rights requests, enough information to identify the protected work and your authority.</li></ul></section>
    <section><h2>Safety boundary</h2><p>We do not provide Roblox account support and cannot restore items, reverse bans, or grant codes. Do not include credentials or private account data. Contact Roblox or the game developers through their official channels for account and game-service issues.</p></section>
    <div className="response-note"><ShieldCheck /><p>Good reports are reviewed for evidence before the public dataset changes. A message does not guarantee publication.</p></div>
  </InfoPage>
}
