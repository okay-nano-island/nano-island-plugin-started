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
import { createBridge, createStore, createUI } from '@nano-island/sdk'

const { manifest } = useManifest()
const bridge = createBridge(manifest.id)
const store = createStore(manifest.id, bridge)
const ui = createUI(manifest.id, bridge)

const noteId = ref('')
onMounted(() => {
  noteId.value = store.get('editNoteId') || ''
})
</script>
