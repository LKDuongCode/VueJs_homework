<script setup>
import { ref } from 'vue'

const numbers = ref([])
// hàm tạo số ngẫu nhiên và push vào mảng
const handleGenerateAnumber = () => {
  const randomNum = Math.floor(Math.random() * 10)
  numbers.value.push(randomNum)
}
</script>

<template>
  <div>
    <button @click="handleGenerateAnumber">random numbers</button>
    <div style="font-size: 30px">{{ numbers }}</div>
  </div>
</template>

<style scoped></style>
