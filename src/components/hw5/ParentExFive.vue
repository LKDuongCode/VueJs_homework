<script setup lang="ts">
import { ref } from 'vue'
import ExFive from './ExFive.vue'
const childStatus = ref<boolean>(false)
</script>

<template>
  <div>ParentExFive</div>
  <button @click="() => (childStatus = !childStatus)">toggle</button>
  <ExFive v-if="childStatus"></ExFive>
</template>

<style scoped></style>
