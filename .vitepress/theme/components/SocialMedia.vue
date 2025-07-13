<template>

  <div ref="socialMedia" class="social-media-section">
    <div class="social-media-section-title">
      我的自媒体平台
    </div>
    <div ref="socialMedia" class="platforms">
      <div v-for="platform in platformsInfo" :key="platform.name" class="platform-item">
        <i :class="['iconfont', platform.icon]"></i>
        <span>{{ platform.name }}</span>
        <p>{{ platform.followers }}粉丝</p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { onMounted, ref } from "vue";

const socialMedia = ref()
const platformsInfo = ref([
  { name: '公众号', icon: 'icon-gongzhonghao', followers: '1' },
  { name: '抖音', icon: 'icon-douyin1', followers: '22' },
])

onMounted(() => {   
  const contactItems = document.querySelectorAll('.contact-item')
  let rightItem = null
  contactItems.forEach(item => { 
    if (!rightItem) {
      rightItem = item
    } else {
      if (item.offsetLeft > rightItem.offsetLeft) {
        rightItem = item
      }
    }
  })
  const marginRigh = socialMedia.value.offsetWidth - rightItem.offsetLeft - rightItem.offsetWidth
  socialMedia.value.style.marginRight = marginRigh + 'px'
})

</script>

<style scoped lang="scss">
@import "../../public/iconfont/iconfont.css";

.social-media-section {
  padding: 20px;
  border-radius: 6px;
  border: 0.1px solid #99999922;

  .social-media-section-title {
    font-size: 20px;
    font-weight: bold;
    color: #ccc;
  }
}

.platforms {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.platform-item {
  width: 150px;
}

.platform-item i {
  font-size: 24px;
  margin-bottom: 10px;
}

.platform-item span {
  display: block;
  margin-bottom: 5px;
}
</style>