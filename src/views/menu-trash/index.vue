<template>
  <div class="p-4 text-white h-full flex flex-col">
    <div v-if="trash.length === 0" class="text-gray-400 text-sm text-center py-8">
      回收站为空
    </div>
    <div class="flex-1 overflow-y-auto space-y-2">
      <div
        v-for="(note, i) in trash"
        :key="i"
        class="bg-gray-800 p-3 rounded-lg text-sm flex justify-between items-center"
      >
        <span class="flex-1 truncate text-gray-400">{{ note.text }}</span>
        <n-button size="tiny" type="warning" @click="restore(i)">恢复</n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NButton, type GlobalThemeOverrides } from 'naive-ui'
import { useManifest } from '@/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#10b981',
    fontFamily: 'inherit',
  },
}

const trash = ref<Array<{ text: string; time: number }>>([])

const { manifest } = useManifest()
const islandCtx = createContext({ pluginId: manifest.id, viewName: 'menu-trash' })

islandCtx.plugin.store.watch('trash', t => {
  trash.value = t as any[]
})

onMounted(async () => {
  const savedTrash = await islandCtx.plugin.store.get('trash')
  if (savedTrash) {
    trash.value = savedTrash as any[]
  }
})

const restore = async (i: number) => {
  const notes = await islandCtx.plugin.store.get('notes') as any[] || []
  const newTrash = [...trash.value]
  const restored = newTrash.splice(i, 1)[0]
  await islandCtx.plugin.store.set('notes', [...notes, restored])
  await islandCtx.plugin.store.set('trash', newTrash)
}
</script>