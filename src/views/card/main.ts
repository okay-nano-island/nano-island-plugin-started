defineIslandViewOptions({
  name: 'card',
  displayName: '常驻卡片',
  description: '这是一个灵动岛常驻卡片',
  icon: '📝',
  type: 'card',
  width: 400,
  height: 40,
  order: 6,
})

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import '@/styles/global.css'

const app = createApp(App)
app.use(naive)
app.mount('#app')
