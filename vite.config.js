import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, '.vitepress/theme')
      }
    }
  }
})