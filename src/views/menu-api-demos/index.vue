<template>
  <div class="w-full h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-2">
    🚀 你好，这是模板
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, useTemplateRef, nextTick, reactive, onUnmounted, computed } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import { useManifest } from '@_islandSetup/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const ViewName = 'menu-api-demos'
const { manifest } = useManifest()
const islandCtx = createContext({
  pluginId: manifest.id,
  viewName: ViewName,
  isDev: import.meta.env.DEV,
})
const message = useMessage()

onMounted(() => {
  console.log('菜单模板挂载完成')
})

onUnmounted(async () => {
  console.log('菜单模板卸载完成')
})
</script>

<style scoped></style>
