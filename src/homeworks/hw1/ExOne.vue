<script setup>
import { ref } from 'vue'

// tạo biến đếm
const count = ref(0)
</script>

<template>
  <div>
    <button @click="() => count++">Click {{ count }} lần</button>
  </div>
</template>

<style scoped></style>
