import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import microApp from '@micro-zoe/micro-app'

const app = createApp(App)

app.use(createPinia())
app.use(router)

microApp.start()

app.mount('#middle')

if (window.__MICRO_APP_ENVIRONMENT__) {
  console.log('middle: 我在微前端环境中')
}

if (window.__MICRO_APP_BASE_APPLICATION__) {
  console.log('middle: 我是主应用')
}

if (window.__MICRO_APP_NAME__) {
  console.log(`middle: 子应用名称 ${window.__MICRO_APP_NAME__}`)
}
