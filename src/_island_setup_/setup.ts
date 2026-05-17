import type { App } from 'vue'
import pinia from './stores'
import i18n from './i18n'

export const islandSetup = {
  install(app: App) {
    app.use(pinia)
    app.use(i18n)
  },
}

export default islandSetup
