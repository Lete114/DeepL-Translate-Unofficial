import type { TrayIconOptions } from '@tauri-apps/api/tray'
import { useI18n } from '@/i18n'
import { useEnv } from '@/stores/env'
import { useSettings } from '@/stores/settings'
import { invoke } from '@tauri-apps/api/core'
import { Menu } from '@tauri-apps/api/menu'
import { TrayIcon } from '@tauri-apps/api/tray'
import { getCurrentWindow } from '@tauri-apps/api/window'
import { watchEffect } from 'vue'

import iconPath from '../assets/icons/icon.ico'
import { TRAY_ID } from '../utils/constant'

const { t } = useI18n()
const win = getCurrentWindow()

async function getTray(id = TRAY_ID) {
  return TrayIcon.getById(id)
}

async function createTray() {
  const tray = await getTray()
  if (tray) {
    return
  }

  const env = useEnv()

  const menu = await getTrayMenu()
  const icon = await fetch(iconPath).then(r => r.arrayBuffer())

  const options: TrayIconOptions = {
    id: TRAY_ID,
    menu,
    tooltip: `${env.appName} v${env.version}`,
    menuOnLeftClick: false,
    icon,
    async action(event) {
      if (event.type === 'Click' && event.button === 'Left' && event.buttonState === 'Up') {
        await win.show()
        await win.setFocus()
      }
    },
  }
  return TrayIcon.new(options)
}

async function getTrayMenu() {
  const env = useEnv()
  return Menu.new({
    items: [
      {
        id: 'open_settings',
        text: t('tray.menu.openSettings.label'),
        async action() {
          await win.show()
          await win.setFocus()
        },
      },
      { item: 'Separator' },
      {
        id: 'version',
        text: `${t('tray.menu.version.label')} v${env.version}`,
        enabled: false,
      },
      {
        id: 'restart_app',
        text: t('tray.menu.restartApp.label'),
        action() {
          invoke('restart_app')
        },
      },
      {
        id: 'quit',
        text: t('tray.menu.quit.label'),
        action() {
          invoke('exit_app')
        },
      },
    ],
  })
}

async function updateTrayMenu() {
  const tray = await getTray()

  if (!tray) {
    return
  }

  const menu = await getTrayMenu()

  tray.setMenu(menu)
}

export async function useTray() {
  await createTray()

  const settings = useSettings()
  watchEffect(() => {
    void settings.store.general.language
    updateTrayMenu()
  })
}
