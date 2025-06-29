import type { TLanguageKey } from '@/types/language'
import type { ISettings } from '@/types/settings'
import { useI18n } from '@/i18n'
import { STORE_SETTINGS_KEY, TARGET_LANGUAGES } from '@/utils/constant'
import { SETTINGS_STORE } from '@/utils/store'
import * as LOG from '@tauri-apps/plugin-log'
import { locale } from '@tauri-apps/plugin-os'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { watch } from 'vue'

const { i18n } = useI18n()

export const defaultSettings: ISettings = {
  general: {
    autoStart: false,
    closeSettings: 'minimize',
    language: '',
    theme: 'system',
  },
  shortcuts: {
    openTranslate: 'Super + `',
    openSettings: 'Alt + `',
  },
  service: {
    url: '',
  },
}

const FALLBACK_MAP: Record<string, TLanguageKey[]> = {
  'ZH-CN': ['ZH-HANS'], // 中国大陆中文 → 简体
  'ZH-TW': ['ZH-HANT'], // 台湾繁体 → 繁体
  'ZH-HK': ['ZH-HANT'], // 香港繁体 → 繁体
  'JA-JP': ['JA'], // 日语日本 → 通用日语
  'FR-FR': ['FR'], // 法语法国 → 通用法语
}

export const useSettings = defineStore(STORE_SETTINGS_KEY, () => {
  // To share responsive data across pages
  const store = useStorage(STORE_SETTINGS_KEY, defaultSettings)

  watch(store, async (newValue) => {
    try {
      await SETTINGS_STORE.set(STORE_SETTINGS_KEY, newValue)
      await SETTINGS_STORE.save()
    }
    catch (error) {
      LOG.error(`Failed to save settings: ${error}`)
      console.error('Failed to save settings:', error)
    }
  }, { deep: true })

  // initialize default application language
  initDefaultApplicationLanguage()
  async function initDefaultApplicationLanguage() {
    let language = store.value.general.language as TLanguageKey | undefined

    if (!language) {
      const systemLang = (await locale() || 'EN').toUpperCase() as TLanguageKey

      if (TARGET_LANGUAGES.includes(systemLang)) {
        language = systemLang
      }
      else {
        const fallbacks = FALLBACK_MAP[systemLang] || []
        language = fallbacks.find(fb => TARGET_LANGUAGES.includes(fb)) || 'EN'
      }

      store.value.general.language = language
    }

    i18n.setLanguage(language)
  }

  return { store }
})
