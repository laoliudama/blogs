<template>
  <div class="tools-and-techs">
    <div class="tools">
      <h2 class="title">开发工具和运行时</h2>
      <div class="tools-list">
        <div v-for="tool in tools" class="tool" :key="tool.name">
          <span>{{ tool.name }}</span>
        </div>
      </div>
    </div>
    <div class="techs">
      <h2 class="title">其他可支持的技术</h2>
      <div class="techs-list">
        <div v-for="tech in techs" :key="tech.name" class="tech">
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tools = ref([
  { name: 'Nodejs做为脚本运行时' },
  { name: 'Git版本控制' },
  { name: 'Github代码托管' },
  { name: '阿里云服务器' },
])
const techs = ref([
  { name: '各种小程序原生开发' },
  { name: '云开发' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'Nodejs' },
  { name: 'VS Code plugin' },
  { name: 'Python' },
])
</script>

<style scoped lang="scss">
.tools-and-techs { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-bottom: 64px;
  .tools ,.techs{
    .title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .tools-list ,.techs-list{ 
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
    .tool,.tech { 
      padding:6px 12px;
      border: 1px solid #fff;
      background: #ddd3;
      border-radius: 8px;
      font-size: 13px;

    }
    .tool:hover,.tech:hover {
      background: #d8b4fe55;
      color: #fff;
    }
  }
  .techs {
    margin-top: 32px;
  }

}
</style>