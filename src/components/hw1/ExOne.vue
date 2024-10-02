<script setup lang="ts">
import { onMounted } from 'vue'

// in thông báo ra màn hình console với nội dung “Component mounted” khi component được mount vào trong DOM
// mounting
onMounted(() => console.log('Component mounted'))
</script>

<template>
  <div>ExOne</div>
</template>

<style scoped></style>
