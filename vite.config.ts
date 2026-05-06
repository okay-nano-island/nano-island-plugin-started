import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import {
  nanoIslandViewVitePlugin,
  nanoIslandMoveHtmlToViewsVitePlugin,
} from '@nano-island/vite-plugins'
import manifest from './src/manifest.json'
import nanoIslandDevConfig from './src/nano-island-dev/config.json'

export default defineConfig(({ command, mode }) => {
  const isDevMode = mode === 'development'
  const buildOutDir = 'dist'

  return {
    plugins: [
      vue(),
      tailwindcss(),
      nanoIslandViewVitePlugin(),
      nanoIslandMoveHtmlToViewsVitePlugin(),
      !isDevMode &&
        viteStaticCopy({
          targets: [
            {
              src: './src/manifest.json',
              dest: buildOutDir,
              rename: { stripBase: 1 },
            },
          ],
        }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, 'src'),
      },
    },
    base: './',
    server: {
      port: nanoIslandDevConfig?.port ?? 5173,
      open: false,
    },
    build: {
      outDir: buildOutDir,
      sourcemap: isDevMode,
      minify: true,
      emptyOutDir: true,
      modulePreload: isDevMode,
      rollupOptions: {
        input: Object.fromEntries(
          manifest.views.map(view => [view.name, path.resolve(import.meta.dirname, view.devEntry)])
        ),
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'naive-vendor',
                test: /naive-ui/,
              },
            ],
          },
        },
      },
    },
  }
})
