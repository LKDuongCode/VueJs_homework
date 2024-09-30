<script setup>
import { ref } from 'vue'
import CountChildren from './CountChildren.vue'

const count = ref(0)
//hứng event từ con
const getCount = (data) => {
  count.value = data
}
</script>

<template>
  <strong>CountParent--------------------</strong>
  <div>Count = {{ count }}</div>
  <CountChildren @count="getCount"></CountChildren>
</template>

<style scoped></style>
