<script setup lang="ts">
import { onUpdated, ref } from 'vue'

const title = ref<string>(document.title)
onUpdated(() => {
  document.title = title.value
})
</script>

<template>
  <div>
    <input type="text" class="text-[#333]" v-model="title" />
  </div>
</template>

<style scoped></style>
