defineIslandViewOptions({
  name: 'popup-quick-view',
  displayName: '新窗口面板',
  description: '这是一个灵动岛新窗口面板',
  icon: 'material-symbols:extension',
  type: 'popup',
  width: 1000,
  height: 750,
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