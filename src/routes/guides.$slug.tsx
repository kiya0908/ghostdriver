import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, CalendarDays, Clock3 } from 'lucide-react'
import { UnofficialNotice } from '@/components/Notice'
import { createSeo } from '@/lib/seo'
import { getGuide } from '@/server/content'

export const Route = createFileRoute('/guides/$slug')({
  loader: async ({ params }) => {
    const guide = await getGuide({ data: params.slug })
    if (!guide) throw notFound()
    return guide
  },
  head: ({ loaderData }) => loaderData ? createSeo(loaderData.title, loaderData.summary, `/guides/${loaderData.slug}`) : {},
  component: GuidePage,
})

function GuidePage() {
  const guide = Route.useLoaderData()
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.summary, dateModified: guide.updatedAt, author: { '@type': 'Organization', name: 'Ghost Driver Wiki community editors' } }
  return (
    <div className="container article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link className="back-link" to="/guides"><ArrowLeft size={16} />All guides</Link>
      <header className="article-header"><p className="eyebrow"><span />{guide.category}</p><h1>{guide.title}</h1><p>{guide.summary}</p><div><span><CalendarDays size={16} />Updated {guide.updatedAt}</span><span><Clock3 size={16} />{guide.readTime}</span></div></header>
      <UnofficialNotice compact />
      <article className="article-content">
        {guide.content.map((section, index) => <section key={section.heading}><span className="article-index">0{index + 1}</span><div><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}{section.callout && <aside><strong>FIELD NOTE</strong><p>{section.callout}</p></aside>}</div></section>)}
      </article>
      <nav className="article-next"><span>Continue learning</span><Link to="/guides">Browse the complete guide library</Link></nav>
    </div>
  )
}
