<template>
  <div class="expanded-container">
    <div class="header">
      <h2>扩展视图</h2>
      <span class="close-btn" @click="handleClose">✕</span>
    </div>
    
    <div class="content">
      <div class="info-card">
        <div class="icon">📋</div>
        <div class="info">
          <p class="title">插件模板</p>
          <p class="desc">这是一个灵动岛插件开发模板</p>
        </div>
      </div>
      
      <div class="features">
        <div class="feature-item">
          <span class="feature-icon">🎨</span>
          <span>自定义样式</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">⚡</span>
          <span>高性能渲染</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon">🔄</span>
          <span>实时更新</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { useStorage } from '@nano-island/sdk'

// const storage = useStorage('{{PLUGIN_ID}}')

const handleClose = () => {
  console.log('关闭扩展视图')
}

onMounted(async () => {
  // const data = await storage.get('template-config')
  // console.log('已加载配置:', data)
})
</script>

<style scoped>
@reference "tailwindcss";

.expanded-container {
  @apply h-full p-4 bg-gradient-to-br from-indigo-600 to-purple-600;
  @apply text-white rounded-xl;
}

.header {
  @apply flex justify-between items-center mb-4;
}

h2 {
  @apply text-xl font-bold;
}

.close-btn {
  @apply text-sm opacity-70 hover:opacity-100 cursor-pointer;
}

.content {
  @apply space-y-4;
}

.info-card {
  @apply flex items-center gap-3 p-3 bg-white/10 rounded-lg;
}

.info-card .icon {
  @apply text-2xl;
}

.info {
  @apply flex flex-col;
}

.title {
  @apply font-semibold;
}

.desc {
  @apply text-xs opacity-80;
}

.features {
  @apply space-y-2;
}

.feature-item {
  @apply flex items-center gap-2 text-sm;
}

.feature-icon {
  @apply text-lg;
}
</style>