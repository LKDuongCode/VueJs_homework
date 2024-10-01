<script setup lang="ts">
import { ref } from 'vue'

const dob = ref<string>('')
</script>

<template>
  <div>
    <input type="date" v-model="dob" />
    <p>Date of Birth : {{ dob }}</p>
  </div>
</template>

<style scoped></style>
