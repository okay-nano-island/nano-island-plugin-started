<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="themeOverrides" class="w-full h-full">
    <NMessageProvider>
      <island-page-wrapper>
        <index />
      </island-page-wrapper>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { darkTheme, NConfigProvider, NMessageProvider, type GlobalThemeOverrides } from 'naive-ui'
import { createContext } from '@nano-island/sdk'
import { useManifest } from '@/composables/useManifest'
import index from './index.vue'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#10b981',
    fontFamily: 'inherit',
  },
}

const { manifest } = useManifest()
const islandCtx = createContext({ pluginId: manifest.id, viewName: 'menu-trash' })
</script>