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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.summary,
    dateModified: guide.updatedAt,
    author: { '@type': 'Organization', name: 'Ghost Driver Wiki community editors' },
    image: guide.heroImage ? [`https://ghostdriver.online${guide.heroImage}`] : undefined,
    keywords: guide.primaryKeyword,
  }

  const figureStyle = { margin: '28px 0', overflow: 'hidden', border: '1px solid var(--outline)', borderRadius: 16, background: 'var(--surface-low)' } as const
  const imageStyle = { display: 'block', width: '100%', height: 'auto' } as const

  return (
    <div className="container article-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Link className="back-link" to="/guides"><ArrowLeft size={16} />All guides</Link>
      <header className="article-header">
        <p className="eyebrow"><span />{guide.category}</p>
        <h1>{guide.title}</h1>
        <p>{guide.summary}</p>
        <div><span><CalendarDays size={16} />Updated {guide.updatedAt}</span><span><Clock3 size={16} />{guide.readTime}</span></div>
      </header>
      {guide.heroImage && (
        <figure style={figureStyle}>
          <img src={guide.heroImage} alt={guide.heroImageAlt ?? guide.title} loading="eager" style={imageStyle} />
        </figure>
      )}
      <UnofficialNotice compact />
      <article className="article-content">
        {guide.content.map((section, index) => (
          <section key={section.heading}>
            <span className="article-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.image && (
                <figure style={figureStyle}>
                  <img src={section.image} alt={section.imageAlt ?? section.heading} loading="lazy" style={imageStyle} />
                  {section.imageCaption && <figcaption style={{ padding: '12px 16px', color: 'var(--muted)', fontSize: 12 }}>{section.imageCaption}</figcaption>}
                </figure>
              )}
              {section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}
              {section.callout && <aside><strong>FIELD NOTE</strong><p>{section.callout}</p></aside>}
            </div>
          </section>
        ))}
      </article>
      <nav className="article-next"><span>Continue learning</span><Link to="/guides">Browse the complete guide library</Link></nav>
    </div>
  )
}
