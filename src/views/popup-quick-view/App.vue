<template>
  <div class="popup-container">
    <div class="popup-header">
      <h2 class="popup-title">{{ note?.title || '笔记详情' }}</h2>
      <button class="close-btn" @click="handleClose">×</button>
    </div>
    <div class="popup-content">
      <p class="note-content">{{ note?.content || '暂无内容' }}</p>
      <p class="note-time" v-if="note?.createdAt">创建于: {{ formatTime(note.createdAt) }}</p>
    </div>
    <div class="popup-footer">
      <button class="btn btn-secondary" @click="handleClose">关闭</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useManifest } from '@/composables/useManifest'
import { createBridge, createStore, createUI } from '@nano-island/sdk'

interface Note {
  id: string
  title: string
  content: string
  createdAt: number
}

const note = ref<Note | null>(null)

function formatTime(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function handleClose() {
  window.close()
}

const { manifest } = useManifest()
const bridge = createBridge(manifest.id)
const store = createStore(manifest.id, bridge)
const ui = createUI(manifest.id, bridge)
// const noteId = new URLSearchParams(window.location.search).get('id')

onMounted(() => {
  const noteId = store.get('editNoteId')
  const storedNotes = store.get('notes') || []
  const notes: Note[] = storedNotes as Note[]
  note.value = notes.find(n => n.id === noteId) || null
})
</script>

<style scoped>
.popup-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.popup-title {
  font-size: 18px;
  font-weight: 600;
}

.close-btn {
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.popup-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.note-content {
  font-size: 14px;
  line-height: 1.8;
  color: #333;
  white-space: pre-wrap;
}

.note-time {
  margin-top: 16px;
  font-size: 12px;
  color: #999;
}

.popup-footer {
  padding: 16px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary {
  background: #f5f5f5;
  color: #666;
}

.btn-secondary:hover {
  background: #eee;
}
</style>
