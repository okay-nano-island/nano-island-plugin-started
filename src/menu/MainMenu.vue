<template>
  <div class="menu-container">
    <div class="menu-item" @click="handleAction('action1')">
      <span class="menu-icon">⚙️</span>
      <span class="menu-text">设置</span>
    </div>
    <div class="menu-item" @click="handleAction('action2')">
      <span class="menu-icon">📊</span>
      <span class="menu-text">统计</span>
    </div>
    <div class="menu-item" @click="handleAction('action3')">
      <span class="menu-icon">💡</span>
      <span class="menu-text">帮助</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleAction = (action: string) => {
  console.log('菜单操作:', action)
}
</script>

<style scoped>
@reference "tailwindcss";

.menu-container {
  @apply p-1 rounded-lg;
  @apply min-w-[160px];
}

.menu-item {
  @apply flex items-center gap-2 px-3 py-2;
  @apply text-sm text-gray-700;
  @apply hover:bg-gray-100 rounded;
  @apply cursor-pointer;
}

.menu-icon {
  @apply text-base;
}

.menu-text {
  @apply flex-1 text-left;
}
</style>