import { createFileRoute, Link } from '@tanstack/react-router'
import { InfoPage } from '@/components/InfoPage'
import { createSeo } from '@/lib/seo'

const questions = [
  ['Is this the official Ghost Driver website?', 'No. This is an independent fan-made reference. It is not affiliated with or endorsed by Tilted Vehicles, Roblox Corporation, or the official Ghost Driver developers.'],
  ['Why are some vehicle stats marked Pending?', 'The game is in Pre-Alpha and reliable values are not always available. We would rather show an honest unknown than publish a fabricated number.'],
  ['How often are codes checked?', 'The tracker is designed for checks after developer announcements and game updates. Every published record includes a last-verified date.'],
  ['Why does a code not work?', 'It may have expired, be case-sensitive, work only once per account, or require a current server. A listed code should still be checked against its verification date.'],
  ['Can I submit a correction?', 'Yes. Use the Contact page and include the page URL, the exact field that is wrong, and a public source or in-game evidence.'],
  ['Does this site sell Robux or game items?', 'No. We do not sell Robux, accounts, codes or in-game items, and we will never ask for your Roblox password.'],
]

export const Route = createFileRoute('/faq')({ head: () => createSeo('Ghost Driver FAQ', 'Answers about Ghost Driver codes, vehicle data, this unofficial fan wiki and community corrections.', '/faq'), component: FaqPage })

function FaqPage() {
  return <InfoPage eyebrow="Quick answers" title="Frequently Asked Questions" description="Straight answers about the game data, verification process and this independent fan project."><div className="faq-list">{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>0{index + 1}</span>{question}</summary><p>{answer}</p></details>)}</div><p className="prose-cta">Still missing an answer? <Link to="/contact">Send a correction or question.</Link></p></InfoPage>
}
