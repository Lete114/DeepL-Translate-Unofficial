export const TRAY_ID = 'app-tray'

export const STORE_SETTINGS_KEY = 'settings'
export const STORE_TRANSLATE_KEY = 'translate'

export const PUBLIC_LANGUAGES = ['AR', 'BG', 'CS', 'DA', 'DE', 'EL', 'EN', 'ES', 'ET', 'FI', 'FR', 'HU', 'ID', 'IT', 'JA', 'KO', 'LT', 'LV', 'NB', 'NL', 'PL', 'PT', 'RO', 'RU', 'SK', 'SL', 'SV', 'TR', 'UK', 'ZH'] as const
export const SOURCE_LANGUAGES = ['AUTO', ...PUBLIC_LANGUAGES] as const
export const TARGET_LANGUAGES = [...PUBLIC_LANGUAGES, 'EN-GB', 'EN-US', 'PT-BR', 'PT-PT', 'ZH-HANS', 'ZH-HANT'] as const
