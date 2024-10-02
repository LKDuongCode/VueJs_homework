<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const size = ref<number>(window.innerWidth)
const update = () => {
  size.value = window.innerWidth
}
onMounted(() => {
  window.addEventListener('resize', update)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', update)
})
</script>

<template>
  <div class="font-semibold">chiều rộng cửa sổ : {{ size }}px</div>
</template>

<style scoped></style>
