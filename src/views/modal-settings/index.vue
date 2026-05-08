<template>
  <div class="p-4 text-white h-full flex flex-col">
    <div class="space-y-4">
      <div class="flex items-center justify-between p-3 rounded-lg bg-gray-800">
        <div>
          <div class="font-medium">紧凑模式</div>
          <div class="text-xs text-gray-400">减少卡片内边距</div>
        </div>
        <n-switch v-model:value="isCompact" @update:value="save" />
      </div>

      <div class="p-3 rounded-lg bg-gray-800">
        <div class="font-medium mb-2">显示笔记数量</div>
        <n-input-number
          v-model:value="maxDisplay"
          :min="1"
          :max="10"
          @update:value="saveDisplay"
        />
      </div>
    </div>

    <div class="mt-auto pt-4 text-xs text-gray-400">
      <p>修改后，灵动岛卡片会立刻同步。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { NSwitch, NInputNumber, type GlobalThemeOverrides } from 'naive-ui'
import { useManifest } from '@/composables/useManifest'
import { createContext } from '@nano-island/sdk'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#10b981',
    fontFamily: 'inherit',
  },
}

const isCompact = ref(false)
const maxDisplay = ref(5)
const settings = ref<any>({})

const { manifest } = useManifest()
const islandCtx = createContext({ pluginId: manifest.id, viewName: 'modal-settings' })

onMounted(async () => {
  settings.value = await islandCtx.plugin.store.get('modal-settings')
  if (settings.value) {
    isCompact.value = settings.value.compact ?? false
    maxDisplay.value = settings.value.maxDisplay ?? 5
  }
})

const save = async (val: boolean) => {
  await islandCtx.plugin.store.set('modal-settings', { ...settings.value, compact: val })
}

const saveDisplay = async (val: number | null) => {
  await islandCtx.plugin.store.set('modal-settings', { ...settings.value, maxDisplay: val ?? 5 })
}
</script>