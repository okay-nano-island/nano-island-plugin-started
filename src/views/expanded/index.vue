<template>
  <div id="root" class="p-4 flex flex-col h-full">
    <div class="flex gap-2 mb-3">
      <n-input
        v-model:value="newNote"
        placeholder="记点什么..."
        size="small"
        @keyup.enter="addNote"
      />
      <n-button type="primary" size="small" @click="addNote">添加</n-button>
    </div>

    <div class="flex-1 overflow-y-auto space-y-2">
      <div
        v-for="(note, i) in notes"
        :key="i"
        class="bg-gray-800 p-2 rounded text-sm flex justify-between items-center group"
      >
        <span>{{ note.text }}</span>
        <n-button
          text
          size="tiny"
          class="text-red-400 opacity-0 group-hover:opacity-100"
          @click="deleteNote(i)"
          >×</n-button
        >
      </div>
      <div v-if="notes.length === 0" class="text-center text-gray-400 py-8">暂无笔记</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NButton, NInput, type GlobalThemeOverrides } from 'naive-ui'
import { useManifest } from '@/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#10b981',
    fontFamily: 'inherit',
  },
}
const { manifest } = useManifest()

const islandCtx = createContext({ pluginId: manifest.id, viewName: 'expanded' })

const notes = ref<Array<{ text: string; time: number }>>([])
const newNote = ref('')

islandCtx.plugin.store.watch('notes', n => {
  notes.value = n as Array<{ text: string; time: number }>
})

const addNote = async () => {
  if (!newNote.value.trim()) return
  const list = [...(notes.value || []), { text: newNote.value.trim(), time: Date.now() }]
  notes.value = list
  await islandCtx.plugin.store.set('notes', list)
  newNote.value = ''
}

const deleteNote = async (i: number) => {
  const list = notes.value.filter((_, idx) => idx !== i)
  const deleted = notes.value[i]
  notes.value = list
  await islandCtx.plugin.store.set('notes', list)
  const trash = await islandCtx.plugin.store.get('trash') as Array<{ text: string; time: number }> || []
  await islandCtx.plugin.store.set('trash', [...trash, deleted])
}

onMounted(async () => {
  const savedNotes = await islandCtx.plugin.store.get('notes')
  if (savedNotes) {
    notes.value = savedNotes as Array<{ text: string; time: number }>
  }
  
  const observer = new ResizeObserver(entries => {
    for (const entry of entries) {
      const { height } = entry.contentRect
      islandCtx.system.ui.requestResize({ width: 320, height: Math.max(300, Math.ceil(height)) })
    }
  })
  observer.observe(document.getElementById('root')!)
})
</script>