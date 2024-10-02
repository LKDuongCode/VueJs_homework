<!-- ExFive.vue -->
<script setup lang="ts">
import { onBeforeUnmount, onUnmounted } from 'vue'

onBeforeUnmount(() => {
  console.log('beforeUnmount: Component is about to be unmounted')
})

onUnmounted(() => {
  console.log('unmounted: Component has been unmounted')
})
</script>

<template>
  <div>ExFive</div>
</template>

<style scoped></style>
