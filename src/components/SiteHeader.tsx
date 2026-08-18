import { Link } from '@tanstack/react-router'
import { Menu, Route as RouteIcon, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const navItems = [
  { to: '/', key: 'home' },
  { to: '/codes', key: 'codes' },
  { to: '/vehicles', key: 'vehicles' },
  { to: '/guides', key: 'guides' },
  { to: '/updates', key: 'updates' },
] as const

export function SiteHeader() {
  const { t } = useTranslation()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Ghost Driver Wiki home">
          <span className="brand-mark" aria-hidden="true"><RouteIcon size={22} strokeWidth={2.4} /></span>
          <span className="brand-copy"><strong>GHOST DRIVER</strong><small>WIKI // UNOFFICIAL</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: 'active' }} activeOptions={{ exact: item.to === '/' }}>
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label={t('nav.menu')}><Menu className="menu-open" /><X className="menu-close" /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => <Link key={item.to} to={item.to}>{t(`nav.${item.key}`)}</Link>)}
            <Link to="/faq">{t('nav.faq')}</Link>
            <Link to="/about">{t('nav.about')}</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}
