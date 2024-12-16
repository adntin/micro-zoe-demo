import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

if (window.__MICRO_APP_ENVIRONMENT__) {
  console.log('app31: 我在微前端环境中')
}

if (window.__MICRO_APP_NAME__) {
  console.log(`app31: 子应用名称 ${window.__MICRO_APP_NAME__}`)
}

if (window.__MICRO_APP_BASE_APPLICATION__) {
  console.log('app31: 我是主应用')
}
