<script setup>
import { ref } from 'vue'

const isShow = ref(false)
const handleShow = () => {
  isShow.value = !isShow.value
}
</script>

<template>
  <div>
    <button @click="handleShow">Show</button>
    <p v-show="isShow">Rikkei Education</p>
  </div>
</template>

<style scoped></style>
