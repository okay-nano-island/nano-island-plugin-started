<template>
  <div class="text-white text-xs font-bold flex items-center gap-1 px-2 h-full">
    <span>🚀</span>
    <span>{{ noteCount > 0 ? `${noteCount} 条笔记` : '暂无笔记' }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useManifest } from '@/composables/useManifest'
import { createBridge, createStore, createUI } from '@nano-island/sdk'

const noteCount = ref(0)

const { manifest } = useManifest()
const bridge = createBridge(manifest.id)
const store = createStore(manifest.id, bridge)
const ui = createUI(manifest.id, bridge)

onMounted(() => {
  noteCount.value = (store.get('notes') as any[])?.length || 0
})
</script>
