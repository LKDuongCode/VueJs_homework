<script setup>
//define type, default
const props = defineProps({
  company: {
    type: String,
    default: 'unknow'
  }
})
</script>

<template>
  <div>ChildCpn = {{ props.company }}</div>
</template>

<style scoped></style>
