import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import './SiteFooter.css'

export function SiteFooter() {
  const { t } = useTranslation()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-wordmark">GHOST DRIVER <span>WIKI</span></p>
          <p className="footer-disclaimer">{t('site.disclaimer')}</p>
        </div>
        <nav className="footer-links" aria-label="Ghost Driver site links">
          <Link to="/codes">Ghost Driver Codes</Link>
          <Link to="/vehicles">Ghost Driver Cars</Link>
          <Link to="/vehicles/best">Best Ghost Driver Cars</Link>
          <Link to="/vehicles/free">Free Ghost Driver Cars</Link>
          <Link to="/vehicles/limited">Limited Ghost Driver Cars</Link>
          <Link to="/guides">Ghost Driver Guides</Link>
          <Link to="/updates">Ghost Driver Updates</Link>
          <Link to="/faq">Ghost Driver FAQ</Link>
          <Link to="/about">About</Link>
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
