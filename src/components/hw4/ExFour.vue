<script setup lang="ts">
import { ref } from 'vue'

const progress = ref<string>('')
</script>

<template>
  <div>
    <input type="range" v-model="progress" />
    <p>progress of completion : {{ progress }}%</p>
  </div>
</template>

<style scoped></style>
