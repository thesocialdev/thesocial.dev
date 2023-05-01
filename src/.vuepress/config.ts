import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  theme: recoTheme({
    locales: {
      '/': {
        selectLanguageText: 'Idiomas',
        selectLanguageName: 'Português',
      },
      '/en/': {
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
      }
    },
    style: "@vuepress-reco/style-default",
    author: "thesocialdev",
    lastUpdatedText: "",
    }),
  locales: {
    '/': {
      lang: 'pt',
      title: '@thesocialdev',
      description: 'Desenvolvimento Orientado a Impacto Social',
    },
    '/en/': {
      lang: 'en',
      title: '@thesocialdev',
      description: 'Social Impact Driven Development',
    },
  },
})