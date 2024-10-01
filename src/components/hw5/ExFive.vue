<script setup lang="ts">
import { ref } from 'vue'

const gender = ref<string>('')
</script>

<template>
  <div>
    <h3>gender: {{ gender }}</h3>
    <div>
      <input type="radio" v-model="gender" value="male" />
      <span>male</span>
    </div>
    <div>
      <input type="radio" v-model="gender" value="female" />
      <span>female</span>
    </div>
    <div>
      <input type="radio" v-model="gender" value="other" />
      <span>other</span>
    </div>
  </div>
</template>

<style scoped></style>
