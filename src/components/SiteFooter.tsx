import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export function SiteFooter() {
  const { t } = useTranslation()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-wordmark">GHOST DRIVER <span>WIKI</span></p>
          <p className="footer-disclaimer">{t('site.disclaimer')}</p>
        </div>
        <nav className="footer-links" aria-label="Legal and information links">
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>Independent community reference</span>
        <span>Data changes fast during Pre-Alpha</span>
      </div>
    </footer>
  )
}
