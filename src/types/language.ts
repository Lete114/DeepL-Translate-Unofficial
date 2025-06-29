import type EN from '@/locales/languages/EN'
import type { SOURCE_LANGUAGES, TARGET_LANGUAGES } from '@/utils/constant'

export type TSourceLanguage = typeof SOURCE_LANGUAGES[number]
export type TTargetLanguage = typeof TARGET_LANGUAGES[number]
export type TLanguageKey = TTargetLanguage
export type TLanguage = Record<TLanguageKey, string>
export type TI18nLanguage = typeof EN
