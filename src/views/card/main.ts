defineIslandViewOptions({
  name: 'card',
  displayName: '常驻卡片',
  description: '这是一个灵动岛常驻卡片',
  icon: 'material-symbols:extension',
  type: 'card',
  width: 400,
  height: 40,
  order: 6,
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