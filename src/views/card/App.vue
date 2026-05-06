<template>
  <div class="w-full h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-2">
    <div class="text-2xl mb-1">🚀</div>
    <div class="text-[10px] text-gray-300 truncate w-full text-center">{{ latestNote }}</div>
    <div>{{ storeData }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useManifest } from '@/composables/useManifest'
import { createBridge, createStore } from '@nano-island/sdk'

const { manifest } = useManifest()
const bridge = createBridge(manifest.id)
const store = createStore(manifest.id, bridge)
store.set('notes', ['你好啊，这是最新的一条笔记'])
const latestNote = ref('点击展开')
const storeData = ref(store.get('notes'))
</script>
