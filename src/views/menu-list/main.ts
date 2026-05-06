import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import '@/styles/global.css'

defineIslandViewOptions({
  name: 'menu-list',
  displayName: '菜单1',
  description: '这是一个灵动岛菜单1',
  icon: 'weui:note-filled',
  type: 'menu',
  order: 2,
})

const app = createApp(App)
app.use(naive)
app.mount('#app')
