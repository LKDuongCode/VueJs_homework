<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const count = ref<number>(0)
let intervalId: ReturnType<typeof setInterval>
onMounted(() => {
  intervalId = setInterval(() => {
    count.value++
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div>
    <h2>ứng dụng đếm số</h2>
    <h2>count = {{ count }}</h2>
  </div>
</template>

<style scoped></style>
