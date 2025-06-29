import type { ComputedRef } from 'vue'
import {
  isRegistered,
  register,
  type ShortcutHandler,
  unregister,
} from '@tauri-apps/plugin-global-shortcut'
import { onUnmounted, watch } from 'vue'

/**
 * useRegister
 * @param shortcuts Responsive shortcut data, either ref or reactive shortcut arrays
 * @param handler Callback to be executed when the shortcut is triggered
 */
export function useRegister(shortcuts: ComputedRef<string[]>, handler: ShortcutHandler) {
  // Listen for shortcut key changes and dynamically update the registration
  watch(shortcuts, async (newShortcuts, oldShortcuts) => {
    // Unregister old shortcuts
    await useUnregister(oldShortcuts || newShortcuts)

    // Register new shortcuts
    if (newShortcuts) {
      for (const shortcut of newShortcuts) {
        if (!shortcut || await isRegistered(shortcut)) {
          continue
        }
        await register(shortcut, (event) => {
          if (event.state === 'Released') {
            return
          }
          handler(event)
        })
      }
    }
  }, { immediate: true })

  // Clean up all shortcuts when components are uninstalled
  onUnmounted(async () => {
    await useUnregister(shortcuts.value)
  })

  return shortcuts
}

async function useUnregister(shortcuts: string[]) {
  for (const shortcut of shortcuts) {
    if (shortcut && await isRegistered(shortcut)) {
      await unregister(shortcut)
    }
  }
}
