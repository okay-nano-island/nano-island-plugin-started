defineIslandViewOptions({
  name: 'expanded',
  displayName: '展开面板',
  description: '这是一个灵动岛展开面版',
  icon: 'material-symbols:extension',
  type: 'expanded',
  width: 320,
  height: 450,
  order: 3,
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