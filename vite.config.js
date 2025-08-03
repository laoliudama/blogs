import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import legacy from "@vitejs/plugin-legacy";
export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    
    define: {
      'process.env': env
    },
    css: [
      "@theme/style/var.css"
    ],
    assetsInclude: [
      '**/*.html'
    ],
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, '.vitepress/theme'),
        '@res': path.resolve(__dirname, '.vitepress/public'),
      }
    },
    plugins: [
      legacy({
        targets: ['> 1%, last 1 version, ie >= 11'],
      })
    ],
    server: {
      allowedHosts:['95f5741a7e7d.ngrok-free.app']
    }
  }
})