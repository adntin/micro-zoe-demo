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

app.mount('#main')

if (window.__MICRO_APP_BASE_APPLICATION__) {
  console.log('main: 我是主应用')
}
