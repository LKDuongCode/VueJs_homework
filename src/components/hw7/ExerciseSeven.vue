<script setup>
const checkPrevent = () => {
  console.log('Form submission prevented!')
}
</script>

<template>
  <form class="flex justify-center flex-col w-96 items-center" @submit.prevent="checkPrevent">
    <h1 class="text-2xl font-extrabold">Form</h1>
    <div><input type="text" /><button type="submit">Submit</button></div>
  </form>
</template>

<style scoped></style>
