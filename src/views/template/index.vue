<template>
  <div
    class="flex-1 w-screen h-screen relative flex items-center justify-center bg-[#F5F5DC]/90 dark:bg-[#232E2A]/90"
  >
    这是一个模板
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, useTemplateRef, nextTick, reactive, onUnmounted, computed } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import { useManifest } from '@_islandSetup/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const ViewName = 'template'
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
