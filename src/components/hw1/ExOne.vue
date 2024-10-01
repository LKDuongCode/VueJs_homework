<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string>('')
</script>

<template>
  <div>
    <input type="text" v-model="value" />
    <p>value : {{ value }}</p>
  </div>
</template>

<style scoped></style>
