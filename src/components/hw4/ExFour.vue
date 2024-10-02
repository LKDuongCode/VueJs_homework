<script setup lang="ts">
import { onUpdated, ref } from 'vue'

const props = defineProps<{ age: number }>()
const pre = ref(props.age)
onUpdated(() => {
  alert(`giá trị age thay đổi từ ${pre.value} thành ${props.age}`)
  pre.value = props.age
})
</script>

<template>
  <div>ExFour = {{ age }}</div>
</template>

<style scoped></style>
