<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const update = () => {
  const now = new Date()
  hours.value = now.getHours()
  minutes.value = now.getMinutes()
  seconds.value = now.getSeconds()
}

let intervalId: ReturnType<typeof setInterval>

onMounted(() => {
  update()
  intervalId = setInterval(update, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div>Current time = {{ hours }} : {{ minutes }} : {{ seconds }}</div>
</template>

<style scoped></style>
