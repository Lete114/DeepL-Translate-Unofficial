import { getName, getVersion } from '@tauri-apps/api/app'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEnv = defineStore('env', () => {
  const appName = ref('')
  const version = ref('')
  getName().then(name => appName.value = name)
  getVersion().then(v => version.value = v)
  return { appName, version }
})
