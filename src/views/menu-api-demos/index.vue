<template>
  <div class="w-full h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-2">
    🚀 你好，这是模板
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useManifest } from '@/composables/useManifest'
import { createContext } from '@nano-island/sdk'
import MockData from './data/mock.json?raw'

const { manifest } = useManifest()
const islandCtx = createContext({
  pluginId: manifest.id,
  viewName: 'template',
})
onMounted(() => {
  console.log('[Nano Island] 开发模板')
})
</script>
