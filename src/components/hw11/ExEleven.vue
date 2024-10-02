<script setup lang="ts">
import { onMounted, reactive } from 'vue'
type Tracffic = {
  id: number
  title: string
  time: number
  status: boolean
}
const trafficLight = reactive<Tracffic[]>([
  {
    id: 1,
    title: 'Đèn đỏ, hãy dừng lại!',
    time: 6000,
    status: true
  },
  {
    id: 2,
    title: 'Đèn vàng, hãy giảm tốc độ!',
    time: 3000,
    status: false
  },
  {
    id: 3,
    title: 'Đèn xanh, được phép đi!',
    time: 4000,
    status: false
  }
])
</script>

<template>
  <div class="flex gap-5 text-2xl text-white">
    <div class="rounded-full size-24 bg-amber-400 flex justify-center items-center">10</div>
    <div class="rounded-full size-24 bg-red-400 flex justify-center items-center">10</div>
    <div class="rounded-full size-24 bg-green-400 flex justify-center items-center">10</div>
  </div>
</template>

<style scoped></style>
