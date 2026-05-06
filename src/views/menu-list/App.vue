<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" class="w-full h-full">
    <n-message-provider>
      <div class="p-4 text-white h-full flex flex-col">
        <div v-if="notes.length === 0" class="text-gray-400 text-sm text-center py-8">暂无笔记</div>
        <div class="flex-1 overflow-y-auto space-y-2">
          <div
            v-for="(note, i) in notes"
            :key="i"
            class="bg-gray-800 p-3 rounded-lg text-sm flex justify-between items-center"
          >
            <span class="flex-1 truncate">{{ note.text }}</span>
            <span class="text-xs text-gray-500 ml-2">{{ formatTime(note.time) }}</span>
          </div>
        </div>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { darkTheme, NConfigProvider, NMessageProvider, type GlobalThemeOverrides } from 'naive-ui'
import { useManifest } from '@/composables/useManifest'
import { createBridge, createStore, createUI } from '@nano-island/sdk'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#10b981',
    fontFamily: 'inherit',
  },
}

const { manifest } = useManifest()
const bridge = createBridge(manifest.id)
const ui = createUI(manifest.id, bridge)
const store = createStore(manifest.id, bridge)

const notes = ref<Array<{ text: string; time: number }>>([])

store.watch('notes', n => {
  notes.value = n as any[]
})

const formatTime = (time: number) => {
  const date = new Date(time)
  return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
}
</script>
