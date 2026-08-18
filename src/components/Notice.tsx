import { AlertTriangle, Radio } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function UnofficialNotice({ compact = false }: { compact?: boolean }) {
  const { t } = useTranslation()
  return (
    <aside className={`unofficial-notice ${compact ? 'compact' : ''}`}>
      <Radio size={18} aria-hidden="true" />
      <div><strong>Unofficial community resource</strong><p>{compact ? t('site.shortDisclaimer') : t('site.disclaimer')}</p></div>
    </aside>
  )
}

export function DataCaution() {
  return (
    <aside className="data-caution">
      <AlertTriangle size={18} aria-hidden="true" />
      <p><strong>Pre-Alpha data notice.</strong> Game values can change without warning. Unconfirmed fields are labelled instead of guessed.</p>
    </aside>
  )
}

export function EmptyState({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="empty-state"><span className="empty-scan" /><p className="micro-label">LIVE TRACKER</p><h2>{title}</h2><p>{children}</p></div>
}
