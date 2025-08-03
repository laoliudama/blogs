<template>
  <div class="nav-bar">
    <div @click="goBack">
      {{ '<' }}
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: '老刘在打码'
  }
})

function goBack() {
  history.back()
}
</script>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  align-items: center;
  .title {
    flex: 1;
  }
}
</style>