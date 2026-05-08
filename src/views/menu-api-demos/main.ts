defineIslandViewOptions({
  name: 'menu-api-demos',
  displayName: 'API示例',
  description: '这是一个API示例',
  icon: 'material-symbols:extension',
  type: 'menu',
  width: '100vw',
  height: '100vh',
  order: 1,
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
