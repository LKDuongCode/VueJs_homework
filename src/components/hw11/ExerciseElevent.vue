<script setup>
import { ref } from 'vue'

const bgStatus = ref(false)
const handleChange = () => {
  bgStatus.value = !bgStatus.value
  console.log(bgStatus.value)
}
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <div
      class="w-96 h-72 flex justify-center items-center"
      :class="bgStatus ? 'bg-blue-400' : 'bg-red-400'"
    >
      background
    </div>
    <button @click="handleChange">change bg</button>
  </div>
</template>

<style scoped></style>
