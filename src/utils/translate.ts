import type { TLanguageKey } from '@/types/language'

type TCountryLanguageObject = Record<TLanguageKey, string>
type TModules = Record<string, { default: TCountryLanguageObject }>
const modules: TModules = import.meta.glob('@/locales/country-language/*.json', { eager: true })

function loadCountryLanguages(modules: TModules) {
  const languagesData = Object.entries(modules).map(([key, value]) => {
    return [key.split('/').pop()!.split('.')[0], value.default]
  })
  const languages: TCountryLanguageObject = Object.fromEntries(languagesData)
  return languages
}

export const translates = loadCountryLanguages(modules)
