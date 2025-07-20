<template>
  <div class="technology-stack">
    <div class="technology-stack-title">
      <span class="iconfont icon-a-jishujishuzhongtai" :style="{ 'font-size': titleFont + 'px' }"></span>
      <label class="title">我的技术栈</label>
      <span class="iconfont icon-a-jishujishuzhongtai" :style="{ 'font-size': titleFont + 'px' }"></span>
    </div>
    <div class="technology-stack-desc">  
      我主要以以下技术栈进行开发，也掌握其他多种技术，可以根据项目进行选择。
    </div>
    <div class="technology-stack-choose">项目技术栈选型</div>
    <div class="technology-stack-content">
      <div v-for="(item, key) in technologyStack" :key="key" class="technology-stack-item">
        <div class="technology-stack-item-title">{{ item.title }}</div>
        <div class="technology-stack-item-content">
          <div class="technology-stack-item-content-item">{{ item.skills }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const titleFont = ref(28)
const technologyStack = ref([
  { title: "小程序", skills: "uniapp + vue/原生开发" },
  { title: "Web", skills: "vue/jq" },
  { title: "移动端", skills: "uniappx + uts/react-native" },
  { title: "轻量级后端", skills: "express + sqlite" },
  { title: "量重级后端", skills: "nestjs + mysql + redis" },
  { title: "桌面端", skills: "electron + vue" },
  { title: "其他", skills: "shell + gitlab + jenkins" },
])

</script>

<style lang="scss" scoped>
@import "../../public/iconfont/iconfont.css";
.technology-stack {
  line-height: normal;
  .technology-stack-title{
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: #cccccc;
    display: flex;
    align-items: center;
    .title {
      padding: 0 14px;
      display: inline-block;
    }
  }

  .technology-stack-desc{
    font-size: 24px;
    color: #ccc;
    margin-top: 12px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  .technology-stack-choose{
    margin-top: 12px;
    font-size: 20px;
    font-weight: bold;
  }
  .technology-stack-content {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 12px;
    justify-content: center;
    .technology-stack-item {
      padding: 12px;
      border:  0.1px solid #cccccc11;
      background: #cccccc11;
      border-radius: 8px;
      .technology-stack-item-title{
        font-size: 18px;
        color:#d8b4fe;
      }
      .technology-stack-item-content{
        margin-top: 12px;
      }
    }
  }
}

@media screen and (max-width: 520px) {
  .technology-stack {
    .technology-stack-title {
      .icon-a-jishujishuzhongtai {
        font-size: 28px !important;
      }
      .title {
        font-size: 28px;
      }
    }
    .technology-stack-desc {
      font-size: 20px;
      padding: 0 16px;
    }
  }
}
</style>