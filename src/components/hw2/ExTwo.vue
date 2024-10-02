<script setup lang="ts">
import { onBeforeUpdate, onUpdated, ref } from 'vue'

const count = ref<number>(0)
const pre = ref<number>(0)
const handleChange = () => {
  pre.value = count.value
  count.value++
}

//updating
onBeforeUpdate(() => {
  console.log('data is changing from', pre.value)
})

onUpdated(() => {
  console.log('updated to', count.value)
})
</script>

<template>
  <div>
    <p>Counter: {{ count }}</p>
    <button @click="handleChange">Increase</button>
  </div>
</template>

<style scoped></style>
