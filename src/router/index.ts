import type { RouteRecordRaw } from 'vue-router'
import PopupView from '@/views/popup/index.vue'
import SettingsView from '@/views/settings/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/settings', component: SettingsView },
  { path: '/popup', component: PopupView },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
