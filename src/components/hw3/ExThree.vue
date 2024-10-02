<script setup lang="ts">
import { computed, ref } from 'vue'

const age = ref<number>(1)
const companies = ref<string[]>(['Rikkei Academy', 'Rikkei Education', 'Rikkei Fukuoka'])
const curCompany = computed(() => {
  if ([1, 2, 3].includes(age.value)) {
    return companies.value[0]
  }
  if ([4, 5, 6].includes(age.value)) {
    return companies.value[1]
  }
  return companies.value[2]
})

const handleChange = () => {
  age.value = Math.floor(Math.random() * 10)
}
</script>

<template>
  <div>
    <h3>{{ curCompany }}</h3>
    <p>age = {{ age }}</p>
    <button @click="handleChange">random</button>
  </div>
</template>

<style scoped></style>
