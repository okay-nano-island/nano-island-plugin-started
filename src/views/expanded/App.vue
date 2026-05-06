<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" class="w-full h-full">
    <n-message-provider>
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
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  darkTheme,
  NButton,
  NInput,
  NConfigProvider,
  NMessageProvider,
  type GlobalThemeOverrides,
} from 'naive-ui'
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
const newNote = ref('')

store.watch('notes', n => {
  notes.value = n as Array<{ text: string; time: number }>
})

const addNote = () => {
  if (!newNote.value.trim()) return
  const list = [...(notes.value || []), { text: newNote.value.trim(), time: Date.now() }]
  notes.value = list
  store.set('notes', list)
  newNote.value = ''
}

const deleteNote = (i: number) => {
  const list = notes.value.filter((_, idx) => idx !== i)
  const deleted = notes.value[i]
  notes.value = list
  store.set('notes', list)
  const trash = store.get('trash') as Array<{ text: string; time: number }>
  store.set('trash', [...trash, deleted])
}

onMounted(() => {
  const observer = new ResizeObserver(entries => {
    for (const entry of entries) {
      const { height } = entry.contentRect
      ui.requestResize({ width: 320, height: Math.max(300, Math.ceil(height)) })
    }
  })
  observer.observe(document.getElementById('root')!)
})
</script>
