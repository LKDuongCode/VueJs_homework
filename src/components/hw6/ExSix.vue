<script setup>
import { ref } from 'vue'

//tạo mảng các số nguyên bất kì
const numbers = ref([1, 2, 3, 8, 9, 10])
const mode = ref(true)
const numbersFiltered = (arr, command) => {
  if (command) {
    return arr.filter((num) => num % 2 === 0)
  } else {
    return arr.filter((num) => num % 2 !== 0)
  }
}
</script>

<template>
  <div>
    <div>Array : {{ numbers }}</div>
    <div>Filtered Array : {{ numbersFiltered(numbers, mode) }}</div>
    <div>
      <button @click="() => (mode = true)">even</button>
      <button @click="() => (mode = false)">odd</button>
    </div>
  </div>
</template>

<style scoped></style>
