defineIslandViewOptions({
  name: 'pill',
  displayName: '灵动岛内容',
  description: '显示在灵动岛的内容',
  icon: 'material-symbols:extension',
  type: 'pill',
  order: 4,
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