<script setup>
import BaseButton from './BaseButton.vue'
//hứng từ con
const handleClickBtn = (type) => {
  switch (type) {
    case 'submit':
      alert('the button pressed is submit')
      break
    case 'button':
      alert('the button pressed is button')
      break
    case 'reset':
      alert('the button pressed is reset')
      break
  }
}
</script>

<template>
  <div>ParentButton----------------</div>
  <div style="display: flex; gap: 10px">
    <BaseButton type="submit" @on-click="handleClickBtn">Submit</BaseButton>
    <BaseButton type="button" @on-click="handleClickBtn">Button</BaseButton>
    <BaseButton type="reset" @on-click="handleClickBtn">Reset</BaseButton>
  </div>
</template>

<style scoped></style>
