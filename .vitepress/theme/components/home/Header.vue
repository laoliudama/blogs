<template>
  <div class="header">
    <div class="container">
      <div class="header-left">
        <img alt="User Avatar" :src="avatar" class="user-avatar" />
        <div class="user-info">
          <label>刘亚男</label>
        </div>
      </div>
      <nav class="header-nav">
        <span :class="['nav-item', 'iconfont', 'icon-shouye' ,'click-able']">首页</span>
        <span v-if="!isMobileDevice()" :class="['nav-item', 'iconfont', 'icon-16','click-able']" @click="toAtricle">文章</span>
        <span :class="['nav-item', 'iconfont', 'icon-ruanjian','click-able']" @click="toMySoftware">我的软件</span>
        <span :class="['nav-item', 'iconfont', 'icon-guanyuwomen-02','click-able']" @click="toAboutMe">关于我</span>

      </nav>
    </div>
  </div>
</template>

<script setup>
import { isMobileDevice } from "@theme/common/utils";
import avatar from '@res/lyn-avatar.jpg'
import { defineEmits } from "vue";

const emit = defineEmits(["toMySoftware", "toAboutMe", "toAtricle"]);

const base = import.meta.env.VITE_ASSETS

function toMySoftware() {
  emit("toMySoftware");
  window.location.href = (base ? 'https://laoliudama.github.io' : '') + base + "/my-software.html"
}

function toAboutMe() {
  emit
  window.location.href = (base ? 'https://laoliudama.github.io' : '') + base + "/about-me.html"
}
function toAtricle() {
  emit("toAtricle");
  window.location.href = (base ? 'https://laoliudama.github.io' : '') + base + "/pages/main.html"
}
</script>

<style scoped>
@import "../../../public/iconfont/iconfont.css";

.header {
  background: #111827;
  color: white;
  padding: 20px 32px;
  position: relative;
  border-bottom: 0.1px solid rgba(255, 255, 255, 0.1);
}

.header-left {
  display: flex;
  align-items: center;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 8px;
}

.user-info label {
  font-size: 24px;
  margin: 0;
}

.user-info p {
  margin: 5px 0 0;
}

.header-nav .nav-item {
  color: white;
  margin-left: 20px;
  text-decoration: none;
}

.header-nav .click-able {
  color: #7f96f2;
  cursor: pointer;
}
@media screen and (min-width: 375px) and (max-width: 520px) {
  .header {
    padding: 16px 12px;
  }

  .icon-16 {
    display: none;
  }

  .header-nav .nav-item {
    margin-left: 8px;
    font-size: 17px;
  }

  .user-info label {
    font-size: 21px;
    margin: 0;
  }

  .user-avatar {
    width: 28px;
    height: 28px;
  }
}

@media screen and (max-width: 375px) {
  .header {
    padding: 16px 10px;
  }
  .header-nav .nav-item {
    margin-left: 8px;
    font-size: 15px;
  }

  .user-info label {
    font-size: 18px;
    margin: 0;
  }
}
</style>