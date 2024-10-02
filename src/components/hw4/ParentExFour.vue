<script setup lang="ts">
import { ref } from 'vue'
import ExFour from './ExFour.vue'
const age = ref<number>(0)
const handleIncrease = () => {
  age.value++
}
</script>

<template>
  <div>
    <p>{{ age }}</p>
    <button @click="handleIncrease">increase age</button>
    <ExFour :age="age"></ExFour>
  </div>
</template>

<style scoped></style>
