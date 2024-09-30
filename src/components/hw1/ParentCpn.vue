<script setup>
import ChildCpn from './ChildCpn.vue'

// tạo biến
const company = 'Rikkei Sorf'
</script>

<template>
  <div>ParentCpn = {{ company }}</div>
  <ChildCpn :company="company"> </ChildCpn>
</template>

<style scoped></style>
