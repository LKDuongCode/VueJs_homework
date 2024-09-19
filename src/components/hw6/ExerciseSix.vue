<script setup>
const handleClick = (value) => {
  console.log(value)
}
</script>

<template>
  <div>
    <button v-on:dblclick="handleClick('Rikkei Academy')">get param</button>
  </div>
</template>

<style scoped></style>
