<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides" class="w-full h-full">
    <n-message-provider>
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
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  darkTheme,
  NConfigProvider,
  NMessageProvider,
  NSwitch,
  NInputNumber,
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

const isCompact = ref(false)
const maxDisplay = ref(5)
const settings = ref<any>({})

const { manifest } = useManifest()
const bridge = createBridge(manifest.id)
const store = createStore(manifest.id, bridge)
const ui = createUI(manifest.id, bridge)

onMounted(() => {
  settings.value = store.get('modal-settings')
  if (settings.value) {
    isCompact.value = settings.value.compact ?? false
    maxDisplay.value = settings.value.maxDisplay ?? 5
  }
})

const save = (val: boolean) => {
  store.set('modal-settings', { ...settings.value, compact: val })
}

const saveDisplay = (val: number | null) => {
  store.set('modal-settings', { ...settings.value, maxDisplay: val ?? 5 })
}
</script>
