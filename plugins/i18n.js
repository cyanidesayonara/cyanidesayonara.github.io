import en from '../locales/en.json'
import fi from '../locales/fi.json'
export default {
  locales: ['en', 'fi'],
  defaultLocale: 'en',
  strategy: 'no_prefix',
  detectBrowserLanguage: {
    alwaysRedirect: true,
    fallbackLocale: 'en',
    useCookie: true,
    cookieKey: 'i18n_redirected'
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, fi }
  },
  vueI18nLoader: true
}
