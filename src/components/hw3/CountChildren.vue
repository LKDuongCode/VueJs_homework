<script setup>
import { ref } from 'vue'

const emit = defineEmits(['count'])
const countNum = ref(0)
const handleIncrease = () => {
  countNum.value++
  emit('count', countNum.value)
}
</script>

<template>
  <div>CountChildren---------------------</div>
  <div>
    <button @click="handleIncrease">Increment</button>
  </div>
</template>

<style scoped></style>
