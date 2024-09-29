<script setup>
import { ref } from 'vue'

const isShow = ref(false)
const handleChange = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <div>
    <button @click="handleChange">{{ isShow ? 'Shown' : 'Hidden' }}</button>
  </div>
</template>

<style scoped></style>
