<script setup>
import { computed, reactive, ref } from 'vue'

const users = reactive([
  {
    id: 1,
    name: 'huy'
  },
  {
    id: 2,
    name: 'duong'
  },
  {
    id: 3,
    name: 'doan'
  },
  {
    id: 4,
    name: 'hoang'
  }
])

const searchTerm = ref('')

const numsFiltered = computed(() => {
  return users.filter((user) => user.name.includes(searchTerm.value))
})
</script>

<template>
  <div>
    <div><h3>User List</h3></div>
    <input type="text" placeholder="search..." v-model="searchTerm" /> <button>search</button>
    <ul v-if="searchTerm === ''">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <ul v-if="searchTerm !== ''">
      <li v-for="user in numsFiltered" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
