defineIslandViewOptions({
  name: 'modal-view',
  displayName: '弹窗1',
  description: '这是一个灵动岛弹窗1',
  icon: 'material-symbols:extension',
  type: 'modal',
  width: 600,
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