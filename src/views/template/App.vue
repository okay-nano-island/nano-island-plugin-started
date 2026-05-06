<template>
  <div class="w-full h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center p-2">
    <div class="text-2xl mb-1">🚀 你好，这是Nano Island 插件页面模板</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useManifest } from '@/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const { manifest } = useManifest()
const ctx = createContext({
  pluginId: manifest.id,
  viewName: 'template',
})
const latestNote = ref({})
const storeData = ref<any[]>([])
onMounted(() => {
  ctx.store.set('notes', ['你好啊，这是最新的一条笔记'])
  storeData.value = ctx.store.get('notes') as any[]
  latestNote.value = storeData.value[0]
  console.log(storeData.value)
})
</script>
