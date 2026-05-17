<template>
  <n-config-provider :theme="naiveTheme" :theme-overrides="themeOverrides" class="w-full h-full">
    <n-message-provider>
      <island-page-wrapper>
        <index />
      </island-page-wrapper>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { NConfigProvider, NMessageProvider } from 'naive-ui'
import { createContext } from '@nano-island/sdk'
import { useManifest } from '@_islandSetup/composables/useManifest'
import { useIslandTheme, useIslandLocale } from '@_islandSetup/index'
import index from './index.vue'

const ViewName = 'menu-api-demos'
const { manifest } = useManifest()
const islandCtx = createContext({
  pluginId: manifest.id,
  viewName: ViewName,
  isDev: import.meta.env.DEV,
})

const {
  naiveTheme,
  themeOverrides,
  init: initTheme,
} = useIslandTheme({ sdkCtx: islandCtx, viewName: ViewName, follow: true })

const { init: initLocale } = useIslandLocale({
  sdkCtx: islandCtx,
  viewName: ViewName,
  follow: true,
})

onMounted(async () => {
  await initTheme()
  await initLocale()
  await console.log(`[ ${manifest.name} ] ${ViewName} 组件挂载完成`)
})
</script>
