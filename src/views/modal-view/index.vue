<template>
  <div class="w-full h-full bg-gray-800 rounded-xl flex flex-col p-4">
    <textarea
      class="flex-1 w-full bg-gray-700 text-white rounded-lg p-3 resize-none"
      placeholder="输入笔记内容..."
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useManifest } from '@/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const { manifest } = useManifest()
const islandCtx = createContext({ pluginId: manifest.id, viewName: 'modal-view' })

const noteId = ref('')
onMounted(async () => {
  noteId.value = await islandCtx.plugin.store.get('editNoteId') || ''
})
</script>