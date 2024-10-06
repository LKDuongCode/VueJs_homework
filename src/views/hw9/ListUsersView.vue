<script setup lang="ts">
import { useRouter } from 'vue-router'
import { users } from './data'
// mảng chứa user

const router = useRouter()
</script>

<template>
  <div class="flex gap-5 flex-col">
    <p>ListUsersView</p>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="user in users" :key="user.id" class="border-2 border-white border-solid p-5">
        <p>id : {{ user.id }}</p>
        <p>name : {{ user.username }}</p>
        <p>email : {{ user.email }}</p>
        <p>address : {{ user.address }}</p>
        <button class="bg-slate-500 px-5" @click="() => router.push(`/user_detail/${user.id}`)">
          Detail
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
