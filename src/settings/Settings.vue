<template>
  <div class="settings-container">
    <div class="section">
      <h3>基本设置</h3>
      
      <div class="setting-item">
        <label class="setting-label">
          <span>启用通知</span>
          <span class="toggle" :class="{ active: enableNotifications }" @click="toggleNotifications">
            <span class="toggle-inner"></span>
          </span>
        </label>
      </div>

      <div class="setting-item">
        <label class="setting-label">
          <span>自动更新</span>
          <span class="toggle" :class="{ active: autoUpdate }" @click="toggleAutoUpdate">
            <span class="toggle-inner"></span>
          </span>
        </label>
      </div>
    </div>

    <div class="section">
      <h3>关于</h3>
      <div class="about-info">
        <p><strong>插件名称</strong>: 模板插件</p>
        <p><strong>版本</strong>: 1.0.0</p>
        <p><strong>开发者</strong>: Island Developer</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { useStorage } from '@nano-island/sdk'

// const storage = useStorage('{{PLUGIN_ID}}')
const enableNotifications = ref(false)
const autoUpdate = ref(true)

const toggleNotifications = async () => {
  enableNotifications.value = !enableNotifications.value
  // await storage.set('notifications-enabled', enableNotifications.value)
}

const toggleAutoUpdate = async () => {
  autoUpdate.value = !autoUpdate.value
  // await storage.set('auto-update', autoUpdate.value)
}

onMounted(async () => {
  // enableNotifications.value = await storage.get('notifications-enabled') || false
  // autoUpdate.value = await storage.get('auto-update') || true
})
</script>

<style scoped>
@reference "tailwindcss";

.settings-container {
  @apply p-4 bg-gray-50 rounded-lg;
  @apply min-h-[300px];
}

.section {
  @apply mb-6;
}

.section:last-child {
  @apply mb-0;
}

h3 {
  @apply text-base font-semibold text-gray-800 mb-3;
}

.setting-item {
  @apply mb-3;
}

.setting-label {
  @apply flex items-center justify-between;
  @apply text-sm text-gray-700;
}

.toggle {
  @apply w-10 h-6 rounded-full bg-gray-300;
  @apply cursor-pointer transition-colors;
  @apply relative;
}

.toggle.active {
  @apply bg-indigo-600;
}

.toggle-inner {
  @apply absolute top-1 left-1 w-4 h-4;
  @apply bg-white rounded-full shadow;
  @apply transition-transform;
}

.toggle.active .toggle-inner {
  @apply transform translate-x-4;
}

.about-info {
  @apply text-sm text-gray-600 space-y-1;
}
</style>