import { createFileRoute, Link } from '@tanstack/react-router'
import { InfoPage } from '@/components/InfoPage'
import { createSeo } from '@/lib/seo'

export const Route = createFileRoute('/privacy')({ head: () => createSeo('Privacy Policy', 'Privacy policy for the independent Ghost Driver Wiki, including current data collection and hosting disclosures.', '/privacy'), component: PrivacyPage })

function PrivacyPage() {
  return <InfoPage eyebrow="Legal / 01" title="Privacy Policy" description="Effective August 18, 2026. This policy describes the current site, not features we may add later.">
    <section><h2>1. Information we collect</h2><p>Ghost Driver Wiki does not currently offer user accounts, comments, purchases, or a server-submitted contact form. We do not intentionally collect names, Roblox credentials, payment details, or precise location data.</p></section>
    <section><h2>2. Technical and hosting data</h2><p>Our hosting provider may automatically process limited request information such as IP address, browser type, requested URL, timestamp, and security logs to deliver the site, prevent abuse, and diagnose failures. Retention and processing depend on the selected deployment provider.</p></section>
    <section><h2>3. Cookies, analytics, and advertising</h2><p>The current project does not set analytics or advertising cookies and contains no advertising SDK. If analytics, ads, consent controls, or other tracking are added, this policy and the site controls must be updated before those tools are enabled.</p></section>
    <section><h2>4. External services and links</h2><p>The interface may load web fonts from Google Fonts, which can receive request metadata such as your IP address and user agent. Links to Roblox or other third-party services are governed by those services’ own privacy policies.</p></section>
    <section><h2>5. Children’s privacy</h2><p>This site is a general information resource and is not designed to collect personal information from children. Do not send account credentials or other sensitive personal information through any correction channel.</p></section>
    <section><h2>6. Your choices and contact</h2><p>You can disable remote font requests through browser privacy controls. For a privacy question or deletion request concerning information you believe we received, use the <Link to="/contact">Contact page</Link>.</p></section>
    <section><h2>7. Changes</h2><p>We may update this policy when the site’s data practices change. The effective date at the top will be revised when a material change is published.</p></section>
  </InfoPage>
}
