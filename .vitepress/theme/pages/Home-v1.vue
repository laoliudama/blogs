<template>
  <div class="home">
    <Header class="header" @toAtricle="toAtricle"/>
    <div class="main-content">
      <div class="know-me">
        <!-- 介绍自己 -->
        <Intro class="intro" />

        <div class="contact-social-media">
          <!-- 联系方式 -->
          <Contact />
          <!-- 自媒体 -->
          <SocialMedia class="social-media" />
        </div>
      </div>

      <Services class="services" />
      <TechnologyStack class="technology-stack" />
      <ToolAndTech class="tool-and-tech" />
      <Footer class="footer" />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/home/Header.vue";
import Footer from "../components/home/Footer.vue";
import Contact from "../components/home/Contact.vue";
import SocialMedia from "../components/home/SocialMedia.vue";
import Intro from "../components/home/Intro.vue";
import Services from "../components/home/Services.vue";
import TechnologyStack from "../components/home/TechnologyStack.vue";
import ToolAndTech from "../components/home/ToolAndTech.vue";
import { onBeforeUnmount, onMounted, onUpdated } from "vue";
import { useRouter } from "vitepress";

onMounted(() => { 
  console.log('onMounted')
});
onUpdated(() => { 
  console.log('onUpdated')
});

function toAtricle() {
  
  console.log('toAtricle')
}


</script>

<style scoped lang="scss">

.home {
  height: 100vh;
  background: #121829;
  min-width: 1024px;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1025;
  }
}


.know-me {
  display: flex;
  background-image: linear-gradient(to right, #121829, #291f4a, #121829);
  padding: 48px 0;

  .intro {
    flex: 1;
  }

  .contact-social-media {
    flex: 1;
    padding-right: 32px;
  }
}

.services,
.technology-stack {
  margin-top: 99px;
}

.tool-and-tech {
  margin-top: 64px;
}

.main-content {
  flex: 1;
  color: white;
  padding-top: 73px;
  overflow-y: scroll;
  max-height: 100%;

  .social-media {
    margin-top: 32px;
  }

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
    /* Color of the track */
    border-radius: 4px;
    /* Rounded corners for the track */
  }

  &::-webkit-scrollbar-thumb {
    background: #9973f8;
    /* Color of the thumb */
    border-radius: 4px;
    /* Rounded corners for the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b18cd1;
    /* Color of the thumb on hover */
  }

  &::before {
    content: "老  刘  在  打  码";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-30deg);
    font-size: 64px;
    font-weight: bold;
    color: rgba(153, 115, 248, 0.08);
    /* Transparent purple */
    pointer-events: none;
    /* Make sure it doesn't interfere with interactions */
    z-index: 0;
    /* Keep it behind content */
    user-select: none;
    white-space: pre-wrap;
    text-align: center;
    mix-blend-mode: screen;
  }

}

.contact-section,
.social-media-section,
.services-section {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer {
  margin-top: 0;
}

@media screen and (max-width: 375px) {
  .home {
    min-width: auto;
  }

  .know-me {
    flex-direction: column;
    padding: 32px 0;
    .contact-social-media {
      padding-right: 0;
    }
  }

  .main-content {
    padding-top: 64px;

    /* Custom Scrollbar */
    &::-webkit-scrollbar {
      width: 2px;
      /* Width of the scrollbar */
    }

    &::before {
      font-size: 30px;
      line-height: 25px;
    }
  }
}

@media screen and (min-width: 375px) and (max-width: 520px) {
  .home {
    min-width: auto;
  }

  .know-me {
    flex-direction: column;
    padding: 32px 0;
    .contact-social-media {
      padding-right: 0;
    }
  }

  .main-content {
    padding-top: 60px;

    /* Custom Scrollbar */
    &::-webkit-scrollbar {
      width: 2px;
      /* Width of the scrollbar */
    }

    &::before {
      font-size: 30px;
      line-height: 25px;
    }
  }
}
</style>
