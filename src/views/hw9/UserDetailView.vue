<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { users } from './data'

// Lấy thông tin từ route
const route = useRoute()
const id = Number(route.params.id) // Chuyển id sang dạng số
const userDetail = reactive({
  id: null,
  username: '',
  email: '',
  address: ''
})

// Tìm user khi component được mount vào DOM
onMounted(() => {
  const userFound = users.find((user: any) => user.id === id)
  if (userFound) {
    Object.assign(userDetail, userFound) // Sao chép user tìm thấy vào
  } else {
    console.error('User not found')
  }
})
</script>

<template>
  <div>
    <h2>UserDetailView</h2>
    <div v-if="userDetail.id" class="border-2 border-white border-solid p-5">
      <p>ID : {{ userDetail.id }}</p>
      <p>Name : {{ userDetail.username }}</p>
      <p>Email : {{ userDetail.email }}</p>
      <p>Address : {{ userDetail.address }}</p>
    </div>
    <div v-else>
      <p>User not found</p>
    </div>
  </div>
</template>

<style scoped></style>
