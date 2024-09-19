<script setup>
let isDisable = false
let placeholder = isDisable ? 'can not edit' : 'can edit'
</script>

<template>
  <div class="flex items-center justify-center mt-96">
    <input type="text" :disabled="isDisable" :placeholder="placeholder" />
  </div>
</template>

<style scoped></style>
