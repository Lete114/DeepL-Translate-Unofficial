import type { ISettings } from '@/types/settings'
import type { ITranslateOptionsWithoutText } from '@/types/translate'
import { defaultSettings } from '@/stores/settings'
import { defaultTranslate } from '@/stores/translate'
import { EWindow } from '@/types/win'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { useStorage } from '@vueuse/core'
import { STORE_SETTINGS_KEY, STORE_TRANSLATE_KEY } from './constant'
import { debounce } from './public'
import { SETTINGS_STORE, TRANSLATE_STORE } from './store'
import { disableWebviewDefaultBehavior } from './webview'

const win = getCurrentWindow()

export async function init() {
  if (win.label === EWindow.Settings) {
    const store = await initStore()
    await firstRun(store)
  }
  disableWebviewDefaultBehavior()
  initBlurWindowHide()
}

async function initStore() {
  const settings = await SETTINGS_STORE.get<ISettings>(STORE_SETTINGS_KEY)
  const translate = await TRANSLATE_STORE.get<ITranslateOptionsWithoutText>(STORE_TRANSLATE_KEY)

  const merges = (...args: any[]) => Object.assign({}, ...args)
  const settings_store = useStorage(STORE_SETTINGS_KEY, defaultSettings, localStorage, { mergeDefaults: (storageValue, defaults) => merges(storageValue, defaults, settings) })
  const translate_store = useStorage(STORE_TRANSLATE_KEY, defaultTranslate, localStorage, { mergeDefaults: (storageValue, defaults) => merges(storageValue, defaults, translate) })

  await SETTINGS_STORE.set(STORE_SETTINGS_KEY, settings_store.value)
  await TRANSLATE_STORE.set(STORE_TRANSLATE_KEY, translate_store.value)
  await SETTINGS_STORE.save()
  await TRANSLATE_STORE.save()

  return { settings_store, translate_store }
}

async function firstRun(_store: Awaited<ReturnType<typeof initStore>>) {

}

async function initBlurWindowHide() {
  handleWindowDrag({
    onFocus() {
      // win.show()
    },
    onBlur() {
      win.hide()
    },
  })
}

export async function handleWindowDrag({ onFocus, onBlur }: {
  onFocus?: () => void
  onBlur?: () => void
}) {
  const wait = 100
  const debounced = debounce(({ payload }) => {
    if (payload) {
      onFocus?.()
    }
    else {
      onBlur?.()
    }
  }, wait)

  await win.onFocusChanged(debounced)
}
