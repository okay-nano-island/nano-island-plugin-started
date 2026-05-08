<template>
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type GlobalThemeOverrides } from 'naive-ui'
import { useManifest } from '@/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#10b981',
    fontFamily: 'inherit',
  },
}

const { manifest } = useManifest()
const islandCtx = createContext({ pluginId: manifest.id, viewName: 'menu-list' })

const notes = ref<Array<{ text: string; time: number }>>([])

islandCtx.plugin.store.watch('notes', n => {
  notes.value = n as any[]
})

onMounted(async () => {
  const savedNotes = await islandCtx.plugin.store.get('notes')
  if (savedNotes) {
    notes.value = savedNotes as any[]
  }
})

const formatTime = (time: number) => {
  const date = new Date(time)
  return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
}
</script>