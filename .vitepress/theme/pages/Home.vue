<template>
  <div class="home">
    <iframe ref="homeref" src="/home/index.html"></iframe>
  </div>
</template>

<script setup>
import { useData, useRouter, withBase } from "vitepress";
import { onMounted, ref } from "vue";

const router = useRouter()

onMounted(() => {
  window.addEventListener('message', (msg) => {
    if (msg.origin === location.origin) {
      const type = msg.data.type
      switch (type) {
        case 'aboutMe':
          router.go('/about-me/')
          break;
        case 'mySoftware':
          router.go('/my-software')
          break
        case 'article':
          router.go('/pages/序言')
          break;
        case 'toGithub':
          location.href = msg.data.url
          break;
        default:
          break;
      }
    }
  })
})

</script>

<style scoped lang="scss">
.home {
  height: 100vh;
  background: #121829;

  iframe {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
}
</style>
