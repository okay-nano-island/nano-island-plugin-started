defineIslandViewOptions({
  name: 'menu-template',
  displayName: '菜单模板',
  description: '菜单模板',
  icon: 'material-symbols:extension',
  type: 'menu',
  order: 0,
})

import { createApp } from 'vue'
import App from './App.vue'
import naiveUI from 'naive-ui'
import islandUI from '@nano-island/ui'
import islandSetup from '@_islandSetup/setup'
import '@nano-island/ui/dist/index.css'
import '@/styles/global.css'

const app = createApp(App)
app.use(islandSetup)
app.use(naiveUI)
app.use(islandUI)
app.mount('#app')
