defineIslandViewOptions({
  name: 'popup-quick-view',
  displayName: '新窗口面板',
  description: '这是一个灵动岛新窗口面板',
  icon: '📋',
  type: 'popup',
  width: 1000,
  height: 750,
})

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import '@/styles/global.css'

const app = createApp(App)
app.use(naive)
app.mount('#app')
