// .vitepress/config.js
import { getSiderbar } from './pageHelper.js'
import {defineConfig} from 'vitepress'

export default defineConfig({
  base: '/', // || process.env.NODE_ENV === 'production' ? '/blogs/' : '/',
  title: '老刘打码',
  description: '记录老刘的开发经验',
  appearance: 'force-dark',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' }],
  ],
  themeConfig: {
    
    nav: [
      { text: '首页', link: '/' },
    ],
    notFound: { // 404页
      title: '未找到页面，迷路了~',
      quote: '请检查地址是否正确，或当前页面未开通，点击下方按钮返回首页',
      linkText: '返回首页'
    },
    sidebar: [
      ...getSiderbar()
    ],
  },

})