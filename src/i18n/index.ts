import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './en'

export const supportedLanguages = ['en'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: { en },
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: [...supportedLanguages],
    defaultNS: 'translation',
    interpolation: { escapeValue: false },
  })
}

export { i18n }
