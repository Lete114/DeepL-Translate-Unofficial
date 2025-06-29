import { LazyStore } from '@tauri-apps/plugin-store'
import { isDev } from './public'

const extname = isDev() ? 'dev.json' : 'json'

const settings_path = `stores/.settings.${extname}`
const translate_path = `stores/.translate.${extname}`

export const SETTINGS_STORE = new LazyStore(settings_path)
export const TRANSLATE_STORE = new LazyStore(translate_path)
