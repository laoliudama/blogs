<template>
  <div class="intro">
    <div class="profile">
      <div class="title">
        <span class="iconfont icon-coding" :style="{ 'font-size': titleFont + 'px' }"></span>
        <div class="tilte-text" :style="{ 'font-size': titleFont + 'px', 'white-space': 'nowrap' }">--老刘在打码--</div>
        <span class="iconfont icon-coding" :style="{ 'font-size': titleFont + 'px' }"></span>
      </div>
      <div class="tags">
        <label class="tag" v-for="(tag, index) in tags" :key="index">
          <span class="iconfont icon-yunduan" :style="{ 'font-size': tagFont + 'px' }"></span>
          <label class="tag-name" :style="{ 'font-size': tagFont + 'px' }">{{ tag }}</label>
          <span class="iconfont icon-yunduan" :style="{ 'font-size': tagFont + 'px' }"></span>
        </label>
      </div>
      <div class="services">
        <label class="service" v-for="(service, index) in services" :key="index">
          <span class="iconfont icon-huaduo" :style="{ 'font-size': serviceFont + 'px','padding-left' : '8px' }"></span>
          <label class="tag-name service-name" :style="{ 'font-size': serviceFont + 'px' }">{{ service }}</label>
          <span class="iconfont icon-huaduo" :style="{ 'font-size': serviceFont + 'px' }"></span>
        </label>
      </div>
      <img class="profile-image" src="../../public/lyn-avatar.jpg" alt="Profile Image">
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
const tags = ref([
  '资深开发',
  '兼职开发'
])
const services = ref([
  '定制开发',
  "兼职开发"
])
const titleFont = ref(48)
const tagFont = ref(32)
const serviceFont = ref(24)
</script>

<style scoped lang="scss">
@import "../../public/iconfont/iconfont.css";

.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  /*文本不换行*/
  white-space: nowrap;
  /*超出范围隐藏*/
  overflow: hidden;
  /*文字超出用省略号*/
  text-overflow: ellipsis;

  .profile {
    .title {
      color: #9973f8;
      font-weight: bold;
      display: flex;
      align-items: center;
      line-height: normal;
    }

    .tags,
    .services {
      display: flex;
      margin-top: 12px;
      line-height: normal;

      .tag,
      .service {
        display: flex;
        align-items: center;
      }

      .tag,
      .service:not(:first-child) {
        margin-left: 4px;
      }

      .tag {
        color: #ccc;
      }
    }

    .services {
      color: #d8b4fe;
    }

    .profile-image {
      margin-top: 16px;
      width: 64px;
      height: 64px;
      border-radius: 88px;
      border: 3px solid #9973f8;
    }
  }
}

@media screen and (max-width:520px) {
  .intro {
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .icon-coding {
    font-size: 32px !important;
  }
  .tilte-text {
    font-size: 32px !important;
  }
  .icon-yunduan {
    font-size: 22px !important;
  }
  .tag-name {
    font-size: 22px !important;
  }
  .icon-huaduo {
    font-size: 18px !important;
  }
  .service-name {
    font-size: 18px !important;
  }
}
</style>