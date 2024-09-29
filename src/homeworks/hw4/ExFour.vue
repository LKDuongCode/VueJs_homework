<script setup>
import { ref, watch } from 'vue'

// ref lưu trữ giá trị input
const inputValue = ref('')

//tạo watch
watch(inputValue, (newValue, oldValue) => {
  console.log(`giá trị thay đổi từ ${oldValue} => ${newValue}`)
})
</script>

<template>
  <div>
    <input type="text" v-model="inputValue" />
  </div>
</template>

<style scoped></style>
