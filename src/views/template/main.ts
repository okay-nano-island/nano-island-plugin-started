defineIslandViewOptions({
  name: 'template',
  displayName: '模板文件',
  description: '这是一个灵动岛模板文件',
  icon: 'material-symbols:extension',
  type: 'menu',
  width: 400,
  height: 40,
})

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import '@/styles/global.css'

const app = createApp(App)
app.use(naive)
app.mount('#app')
