<template>
  <div class="text-white text-xs font-bold flex items-center gap-1 px-2 h-full">
    <span>🚀</span>
    <span>{{ noteCount > 0 ? `${noteCount} 条笔记` : '暂无笔记' }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useManifest } from '@/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const noteCount = ref(0)

const { manifest } = useManifest()
const islandCtx = createContext({ pluginId: manifest.id, viewName: 'pill' })

onMounted(async () => {
  const notes = await islandCtx.plugin.store.get('notes') as any[] || []
  noteCount.value = notes.length
})
</script>