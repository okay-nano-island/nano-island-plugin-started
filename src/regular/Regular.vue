<template>
  <div class="regular-container" @click="handleClick">
    <span class="icon">📦</span>
    <span class="text">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  message: string
}>()

const emit = defineEmits<{
  click: []
}>()

const handleClick = () => {
  emit('click')
}
</script>

<style scoped>
@reference "tailwindcss";

.regular-container {
  @apply flex items-center justify-center h-full;
  @apply text-white font-semibold text-sm;
  @apply cursor-pointer rounded-full px-4;
  @apply hover:bg-white/10 transition-colors;
  gap: 8px;
}

.icon {
  @apply text-lg;
}

.text {
  @apply text-xs opacity-90;
}
</style>