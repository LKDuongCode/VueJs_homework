<script setup lang="ts">
import { ref } from 'vue'

const color = ref<string>('')
</script>

<template>
  <div>
    <input type="color" v-model="color" />
    <p>color code : {{ color }}</p>
  </div>
</template>

<style scoped></style>
