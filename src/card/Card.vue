<template>
  <div class="card-container">
    <div class="card-header">
      <span class="icon">📦</span>
      <span class="title">模板卡片</span>
    </div>
    <div class="card-body">
      <p class="value">{{ displayValue }}</p>
      <p class="label">示例数据</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const displayValue = ref('42')

onMounted(() => {
  console.log('卡片组件已挂载')
})
</script>

<style scoped>
@reference "tailwindcss";

.card-container {
  @apply h-full p-3 bg-white/10 backdrop-blur-sm;
  @apply rounded-lg border border-white/20;
  @apply text-white;
}

.card-header {
  @apply flex items-center gap-2 mb-2;
  @apply text-sm font-medium;
}

.icon {
  @apply text-base;
}

.card-body {
  @apply flex flex-col items-center;
}

.value {
  @apply text-xl font-bold;
}

.label {
  @apply text-xs opacity-70;
}
</style>