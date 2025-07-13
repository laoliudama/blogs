<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-left">
        <div class="footer-info-box">
          <img alt="User Avatar" src="../../public/zqq.jpg" class="user-avatar" />
          <div class="user-name">老刘在打码</div>
        </div>
        <div class="footer-info">

          <div class="footer-info-text">专业的开发者，定制开发，提供微信开发、小程序开发、桌面应用、微前端等技术解决方案。</div>
          <div class="platforms">
            <a class="platform" href="https://github.com/laoliudama?tab=repositories" target="_blank">Github</a>
          </div>
          <div class="other-contact">其他联系方式</div>
          <div class="tel">
            <label class="iconfont icon-dianhua">18680394224</label>
          </div>
          <div class="email">
            <label class="iconfont icon-youjian">lyn642872728@foxmail.com</label>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <label class="wx iconfont icon-xinxi">微信联系</label>
        <img src="../../public/qrcode.png" alt="WeChat QR Code" class="wechat-qrcode" />
        <label>扫码添加</label>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped lang="scss">
@import "../../public/iconfont/iconfont.css";

.footer {
  background-color: #2228;
  color: white;
  padding: 20px 16px;
  padding-bottom: 64px;
  text-align: center;

  .footer-info {
    .footer-info-text,
    .tel,
    .email,
    .platforms,
    .other-contact {
      margin-top: 16px;
      color: #9ca3af;
    }
    .other-contact {
      font-size: 20px;
      color: #fff;
    }
  }

  .footer-info-box {
    display: flex;
    align-items: center;

  }

  .user-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .user-name {
    font-size: 20px;
    font-weight: bold;
    color: #ddd;
  }

  .footer-info {
    margin-top: 20px;
    text-align: left;
  }

  .wx {
    font-size: 18px;
    padding-left: 4px;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.wechat-qrcode {
  width: 160px;
  height: 160px;
  margin: 10px 0;
}
</style>