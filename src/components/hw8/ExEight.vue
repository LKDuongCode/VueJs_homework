<script setup>
import { ref } from 'vue'
const init = [1, 4, 2, 6, 8, 0]
const intNum = ref([1, 4, 2, 6, 8, 0])

//hàm sắp xếp
const handleSort = (arr, command) => {
  if (command === 'default')
    return (intNum.value = init) //không làm dèault được
  else if (command === 'increasing') return arr.sort((firstNum, secondNum) => firstNum - secondNum)
  else if (command === 'decreasing') return arr.sort((firstNum, secondNum) => secondNum - firstNum)
}
</script>

<template>
  <div>
    <div class="flex">
      <button @click="handleSort(intNum, 'default')">default</button>
      <button @click="handleSort(intNum, 'increasing')">increasing</button>
      <button @click="handleSort(intNum, 'decreasing')">decreasing</button>
    </div>

    <div class="flex">
      <button class="content" disabled v-for="num in intNum" :key="num">{{ num }}</button>
    </div>
  </div>
</template>

<style scoped>
.flex {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.content {
  background-color: white;
  color: black;
}
</style>
