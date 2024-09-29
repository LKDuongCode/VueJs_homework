<script setup>
import { computed, ref, watch } from 'vue'

// get data input
const inputValue = ref(0)

//tinh bình phương
const squareOfValue = computed(() => inputValue.value * inputValue.value)

//theo dõi giá trị
watch(inputValue, (newValue, oldValue) => {
  console.log(`giá trị thay đổi từ ${oldValue} => ${newValue}`)
})
</script>

<template>
  <div>
    <div>
      <input type="number" v-model="inputValue" />
      <button>Add to cart</button>
    </div>
    <div>Giá trị bình phương: {{ squareOfValue }}</div>
  </div>
</template>

<style scoped></style>
