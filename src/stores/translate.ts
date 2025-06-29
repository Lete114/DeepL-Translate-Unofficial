import type { ITranslateOptionsWithoutText } from '@/types/translate'
import { STORE_TRANSLATE_KEY } from '@/utils/constant'
import { TRANSLATE_STORE } from '@/utils/store'
import * as LOG from '@tauri-apps/plugin-log'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { reactive, toRefs, watch, watchEffect } from 'vue'
import { useSettings } from './settings'

export const defaultTranslate: ITranslateOptionsWithoutText = {
  from: 'AUTO',
  to: '',
}

export const useTranslate = defineStore(STORE_TRANSLATE_KEY, () => {
  const settingStore = useSettings()
  // To share responsive data across pages
  const store = useStorage(STORE_TRANSLATE_KEY, defaultTranslate)

  // Initialize default target language for translation
  // If the target language is not set, use the language from settings
  // If the target language already has a value, no need to set it
  watchEffect(() => {
    void settingStore.store.general.language
    if (store.value.to) {
      return
    }
    store.value.to = settingStore.store.general.language
  })

  watch(store, async (newValue) => {
    try {
      await TRANSLATE_STORE.set(STORE_TRANSLATE_KEY, newValue)
      await TRANSLATE_STORE.save()
    }
    catch (error) {
      LOG.error(`Failed to save translate: ${error}`)
      console.error('Failed to save translate:', error)
    }
  }, { deep: true })

  return { store }
})

export const useTranslateStates = defineStore('translate_states', () => {
  interface IStates {
    loading: boolean
    errorMsg: string
    result: string
    text: string
    alternatives: string[]
  }

  const states = reactive<IStates>({
    loading: true,
    errorMsg: '',
    result: '',
    text: '',
    alternatives: [],
  })
  return { ...toRefs(states) }
})
