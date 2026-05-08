defineIslandViewOptions({
  name: 'modal-settings',
  displayName: '设置弹窗',
  description: '这是一个灵动岛设置弹窗',
  icon: 'material-symbols:extension',
  type: 'modal',
  width: 600,
  height: 750,
  order: 0,
})

import { createApp } from 'vue'
import App from './App.vue'
import naiveUI from 'naive-ui'
import islandUI from '@nano-island/ui'
import '@nano-island/ui/dist/index.css'
import '@/styles/global.css'

const app = createApp(App)
app.use(naiveUI)
app.use(islandUI)
app.mount('#app')