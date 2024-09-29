<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

const handleChange = (ask) => {
  if (ask === 'show') {
    isVisible.value = true
  } else if (ask === 'hide') {
    isVisible.value = false
  }
}
</script>

<template>
  <div>
    <button @click="handleChange('show')">show</button>
    <button @click="handleChange('hide')">hide</button>
    <div v-show="!isVisible">This content is hidden...</div>
    <div v-show="isVisible">This is content!</div>
  </div>
</template>

<style scoped>
button {
  margin: 10px;
}
</style>
