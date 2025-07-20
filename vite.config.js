import { defineConfig ,loadEnv} from 'vite'
import path from 'path'

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env': env
    },
    css: [
      "@theme/style/var.css"
    ],
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, '.vitepress/theme')
      }
    }
  }
})