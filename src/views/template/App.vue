<template>
  <n-config-provider :theme="darkTheme" class="w-full h-full">
    <n-message-provider>
      <index />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, NConfigProvider, NMessageProvider } from 'naive-ui'
import { createContext } from '@nano-island/sdk'
import { useManifest } from '@/composables/useManifest'
const { manifest } = useManifest()
import index from './index.vue'

const islandCtx = createContext({ pluginId: manifest.id, viewName: 'modal-note' })
// islandCtx.events.on('themeChange', (theme) => {
//   // darkTheme.value = theme === 'dark'
// })
</script>
