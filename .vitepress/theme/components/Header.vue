<template>
  <div class="header">
    <div class="container">
      <div class="header-left">
        <img alt="User Avatar" src="../../public/zqq.jpg" class="user-avatar" />
        <div class="user-info">
          <h1>刘亚男</h1>
        </div>
      </div>
      <nav class="header-nav">
        <span :class="['nav-item','iconfont','icon-shouye']">首页</span>
        <span :class="['nav-item','iconfont','icon-16']" @click="toAtricle">文章</span>
        <span :class="['nav-item','iconfont','icon-ruanjian']">我的软件</span>
        <span :class="['nav-item','iconfont','icon-guanyuwomen-02']">关于我</span>

      </nav>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.VITE_ASSETS
function toAtricle() {
  window.location.href = base + "/pages/main.html"
}
</script>

<style scoped>
@import "../../public/iconfont/iconfont.css";
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

.user-info h1 {
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
</style>