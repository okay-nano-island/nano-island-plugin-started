<template>
  <NConfigProvider :theme="darkTheme" class="w-full h-full">
    <NMessageProvider>
      <island-page-wrapper>
        <index />
      </island-page-wrapper>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { darkTheme, NConfigProvider, NMessageProvider } from 'naive-ui'
import { createContext } from '@nano-island/sdk'
import { useManifest } from '@/composables/useManifest'
import index from './index.vue'

const { manifest } = useManifest()
const islandCtx = createContext({ pluginId: manifest.id, viewName: 'card' })
</script>