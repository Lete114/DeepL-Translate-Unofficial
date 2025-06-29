import type { TI18nLanguage, TLanguageKey } from '@/types/language'

type TI18nLanguageObject = Record<TLanguageKey, TI18nLanguage>
 type TModules = Record<string, { default: TI18nLanguageObject }>
const modules: TModules = import.meta.glob('@/locales/languages/*.ts', { eager: true })

function loadLanguages(modules: TModules) {
  const languagesData = Object.entries(modules).map(([key, value]) => {
    return [key.split('/').pop()!.split('.')[0], value.default]
  })
  const languages: TI18nLanguageObject = Object.fromEntries(languagesData)
  return languages
}

export const languages = loadLanguages(modules)
