import { router } from '@/router'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { init } from './utils/init'
import 'virtual:uno.css'

init().then(() => {
  const app = createApp(App)

  app.use(router)

  const pinia = createPinia()
  app.use(pinia)

  app.mount('#app')
})
