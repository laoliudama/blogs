import { defineConfig } from 'vite'
import { VitePress } from 'vitepress'
import path from 'path'
 
export default defineConfig({
  plugins: [VitePress()],
  resolve: {
    alias: {
      '@theme': path.resolve(__dirname, '.vitepress/theme')
    }
  }
})