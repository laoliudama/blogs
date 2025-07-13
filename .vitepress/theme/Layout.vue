<!-- .vitepress/theme/Layout.vue -->
<template>
   <!-- 重写默认theme中home布局 -->
  <div v-if="page.frontmatter.layout === 'home'">
    <Home />
  </div>
   <div v-else> 
    <Layout>
      <Content />
    </Layout> 
   </div> 
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import Home from "./pages/Home.vue"

const { Layout } = DefaultTheme
const pageData = useData()
const { page } = pageData


</script>

<style scoped lang="scss">
.home__page { 
  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction: column;
  overflow: hidden;
  .home__main {
    flex: 1;
  }
}
</style>