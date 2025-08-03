<template>
  <div class="services">
    <div class="services-title">
      <span class="iconfont icon-coding" :style="{ 'font-size': titleFont + 'px' }"></span>
      <span>--老刘在打码--</span>
      <span class="iconfont icon-coding" :style="{ 'font-size': titleFont + 'px' }"></span>
    </div>
    <div class="services-desc">
      <span
        class="services-desc-impotant">兼职接单，10年开发经验，</span><span>全栈工程师，</span><span>从前端到后端，从小程序到桌面应用，一站式解决所有问题</span>
    </div>
    <div class="service-cards">
      <div class="service-card" v-for="service in services" :key="service.title">
        <i style="font-size: 48px;line-height: normal;" :class="service.icon"></i> 
        <div :class="['service-title']">{{ service.title }}</div>
        <div class="service-skills">{{ service.skills }}</div>
        <ul class="apps">
          <li class="app" v-for="app in service.apps" :key="app">{{ app }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'
const titleFont = ref(32)

const services = ref([
  {
    title: '小程序',
    skills: 'uniapp + vue3，一套代码多端运行',
    apps: ['微信小程序', '支付宝小程序', '抖音小程序', 'H5应用'],
    icon: 'iconfont icon-xiaochengxu',
  },
  {
    title: '移动端',
    skills: 'uniappx + uts/react-native，多终端设备开发',
    apps: ['iOS', '安卓', '鸿蒙'],
    icon: 'iconfont icon-mobile_application',
  },
  {
    title: '桌面应用',
    skills: 'electron/python + vue3,跨平台应用开发',
    apps: ['Windows', 'MacOS', 'Linux'],
    icon: 'iconfont icon-zhuomianyingyong',
  },
  {
    title: '网站开发',
    skills: 'vue3全家桶，现代化响应式网站开发',
    apps: ['企业官网', '管理系统', '博客网站'],
    icon: 'iconfont icon-wangzhankaifa',
  },
  {
    title: '后台开发',
    skills: 'express/koa/nest + mysql',
    apps: ['api接口', '数据持久化'],
    icon: 'iconfont icon-qidaigengduomoban',
  },
  {
    title: '其他',
    skills: 'shell/nodejs/jenkins',
    apps: ['ci/cd', '小工具'],
    icon: 'iconfont icon-qita',
  }
])
</script>

<style scoped lang="scss">
@import "../../../public/iconfont/iconfont.css";

.services {
  .services-title {
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    color: #9973f8;
    margin-top: 12px;
  }

  .services-desc {
    text-align: center;
    font-size: 20px;
    color: #ccc;
    margin: 32px 0;

    .services-desc-impotant {
      color: #d8b4fe;
    }
  }

  .service-cards {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    .service-card {
      max-width: 20%;
      transition: transform 0.3s ease;
      padding: 12px;
      border-radius: 8px;
      background: #ffffff11;
      border: 0.1px solid #cccccc11;
      
      .service-title {
        font-size: 24px;
        color: #cccccc;
        font-weight: bold;
        margin-top: 12px;
      }

      .service-skills {
        margin-top: 8px;
        font-size: 20px;
        color: #aaa;
      }

      .apps {
        margin-top: 8px;
        .app {
          position: relative;
          padding-left: 10px;
          color: #d8b4fe;
        }

        .app::before {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          background: #d8b4fe;
          border-radius: 6px;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .service-card:hover {
      transform: scale(1.1);
      border: 1px solid #9973f8;
    }
  }
}

@media screen and (max-width: 520px) {
  .services {
    .services-title {
      font-size: 28px;
      .icon-coding {
        font-size: 28px !important;
      }
    }
    
    .services-desc {
      margin: 28px 16px;
      font-size: 18px;
    }

    .service-cards {
      margin-top: 20px;
      flex-direction: column;
      .service-card {
        max-width: unset;
        padding: 12px 20px;
        margin: 0 20px;
      }
      .service-card:hover {
        transform: scale(1);
      }
    }
  }
}
</style>