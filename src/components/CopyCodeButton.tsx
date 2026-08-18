import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function CopyCodeButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation()

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button className="copy-button" type="button" onClick={copy} aria-live="polite">
      {copied ? <Check size={17} /> : <Copy size={17} />}
      {copied ? t('actions.copied') : t('actions.copy')}
    </button>
  )
}
