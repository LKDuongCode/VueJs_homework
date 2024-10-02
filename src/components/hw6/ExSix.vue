<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const handleIncrese = () => {
  count.value++
  document.title = `count = ${count.value.toString()}`
}
</script>

<template>
  <div>
    <button @click="handleIncrese">increment</button>
  </div>
</template>

<style scoped></style>
