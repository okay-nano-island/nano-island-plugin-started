defineIslandViewOptions({
  name: 'modal-settings',
  displayName: '设置弹窗',
  description: '这是一个灵动岛设置弹窗',
  icon: '📋',
  type: 'modal',
  width: 600,
  height: 750,
  order: 0,
})

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import '@/styles/global.css'

const app = createApp(App)
app.use(naive)
app.mount('#app')
