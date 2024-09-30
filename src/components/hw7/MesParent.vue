<script setup>
import MesChild from './MesChild.vue'
//hứng sự kiện từ con
const getMes = (data) => {
  alert(data)
}
</script>

<template>
  <div>MesParent------------------</div>

  <div>
    <MesChild @send="getMes"></MesChild>
  </div>
</template>

<style scoped></style>
