<script setup>
const isActive = true
const backgroundColor = isActive ? 'bg-blue-400' : 'bg-red-400'
</script>

<template>
  <div class="text-white m-10 w-max p-5" :class="backgroundColor">
    {{ isActive ? 'active' : 'banned' }}
  </div>
</template>

<style scoped></style>
