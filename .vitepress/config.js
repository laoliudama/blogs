// .vitepress/config.js
import { getSiderbar } from './pageHelper.js'

export default {
  base: process.env.VITE_ASSETS,
  title: '老刘打码',
  description: '记录老刘的开发经验',
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
    ]
  }
}