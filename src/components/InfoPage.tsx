import type { ReactNode } from 'react'
import { UnofficialNotice } from './Notice'
import { PageHero } from './PageHero'

export function InfoPage({ eyebrow, title, description, children, showNotice = true }: { eyebrow: string; title: string; description: string; children: ReactNode; showNotice?: boolean }) {
  return <div className="container page-shell info-page"><PageHero eyebrow={eyebrow} title={title} description={description} />{showNotice && <UnofficialNotice compact />}<article className="prose-panel">{children}</article></div>
}
