<script setup lang="ts">
import type { StateType } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

//lấy data từ store
const store = useStore<StateType>()
const users = computed(() => store.state.users)
</script>

<template>
  <div>
    <table border="1" style="border-collapse: collapse">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Date of birth</th>
          <th>Address</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.userName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.dob }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button>Sửa</button>
            <button>Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
