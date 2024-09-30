<script setup>
import { ref } from 'vue'
import FormAddUser from './FormAddUser.vue'
//kiểm soát ẩn hiện
const status = ref(false)
//hứng event từ con
const getClose = (command) => {
  if (command === 'closeForm') {
    status.value = false
  }
}

//open
const handleOpen = () => {
  status.value = true
}
</script>

<template>
  <div>ListUser---------------------</div>
  <div>
    <button @click="handleOpen">add user</button>
  </div>
  <div v-if="status">
    <FormAddUser @close="getClose"> </FormAddUser>
  </div>
</template>

<style scoped></style>
