import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    lib: {
      entry: {
        regular: 'src/regular/Regular.vue',
        expanded: 'src/expanded/Expanded.vue',
        card: 'src/card/Card.vue',
        settings: 'src/settings/Settings.vue',
        'menu-main': 'src/menu/MainMenu.vue',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', '@nano-island/sdk'],
      output: {
        entryFileNames: chunkInfo => {
          if (
            chunkInfo.name === 'regular' ||
            chunkInfo.name === 'expanded' ||
            chunkInfo.name === 'card' ||
            chunkInfo.name === 'settings'
          ) {
            return `${chunkInfo.name}.js`
          }
          return `${chunkInfo.name}.js`
        },
      },
    },
  },
})