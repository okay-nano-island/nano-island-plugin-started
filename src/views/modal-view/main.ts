defineIslandViewOptions({
  name: 'modal-view',
  displayName: '弹窗1',
  description: '这是一个灵动岛弹窗1',
  icon: '📋',
  type: 'modal',
  width: 600,
  height: 750,
})

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import '@/styles/global.css'

const app = createApp(App)
app.use(naive)
app.mount('#app')
