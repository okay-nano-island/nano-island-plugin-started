defineIslandViewOptions({
  name: 'pill',
  displayName: '灵动岛内容',
  description: '显示在灵动岛的内容',
  icon: '📋',
  type: 'pill',
  order: 4,
})

import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import '@/styles/global.css'

const app = createApp(App)
app.use(naive)
app.mount('#app')
