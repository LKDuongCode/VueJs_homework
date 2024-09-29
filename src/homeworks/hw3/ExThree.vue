<script setup>
import { computed, ref } from 'vue'

//tạo hai biến dài và rộng
let long = ref(20)
let wide = ref(10)

//hàm tính diện tích
const calculateS = computed(() => long.value * wide.value)

//hàm tăng chiều rộng
const increaseWide = () => {
  wide.value += 10
}
</script>

<template>
  <div>
    <div>
      <p>long = {{ long }}</p>
      <p>wide = {{ wide }}</p>
    </div>

    <div>
      <h1>Acreage : {{ calculateS }}</h1>
    </div>

    <div>
      <p><button @click="increaseWide">+10 wide</button></p>
    </div>
  </div>
</template>

<style scoped></style>
