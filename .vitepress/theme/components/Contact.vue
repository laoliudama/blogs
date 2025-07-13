<template>
  <div class="contact-section">
    <div class="content-title">
      联系方式
    </div>
    <div class="contact-items">
      <div v-for="(item, index) in contactItems" :key="index" class="contact-item">
        <i :class="['iconfont', item.icon]"></i>
        <span>{{ item.title }}</span>
        <p>{{ item.content }}</p>
      </div>

      <!-- More contact items -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const contactItems = ref([
  {
    icon: "icon-weixin",
    title: "微信",
    content: "lyn522lh",
  },
  {
    icon: "icon-shouji",
    title: "电话",
    content: "18680394224",
  },
  {
    icon: "icon-youxiang",
    title: "邮箱",
    content: "642872728@qq.com",
  },
  {
    icon: "icon-douyin1",
    title: "抖音",
    content: "灵活的胖子",
  },
  {
    icon: "icon-github",
    title: "GitHub",
    content: "laoliudama",
  },
  {
    icon: "icon-Bzhan",
    title: "B站",
    content: "老刘在开发",
  },
  {
    icon: "icon-wap_toolbar_csdn",
    title: "CSDN",
    content: "老刘在开发",
  },
]);
</script>

<style scoped lang="scss">
@import "../../public/iconfont/iconfont.css";

.contact-section {
  position: relative;

  .content-title {
    font-size: 28px;
    font-weight: bold;
    color: #ccc;

  }
}

.contact-items {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;

}

.contact-item {
  background-color: #99999922;
  padding: 20px;
  border-radius: 5px;
  width: 150px;
  border: 0.1px solid #99999922;
  transition: transform 0.3s ease;
  /* 平滑过渡效果 */
}

.contact-item:hover {
  transform: scale(1.1);
  border: 1px solid #999999;
  /* 鼠标悬停时放大 */
}

.contact-item i {
  font-size: 24px;
  margin-bottom: 10px;
}

.contact-item span {
  display: block;
  margin-bottom: 5px;
}
</style>