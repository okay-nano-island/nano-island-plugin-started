defineIslandViewOptions({
  name: 'menu-trash',
  displayName: '菜单2',
  description: '这是一个灵动岛菜单2',
  icon: 'material-symbols:extension',
  type: 'menu',
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