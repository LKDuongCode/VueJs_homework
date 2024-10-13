<script setup lang="ts">
import { commit, type StateType } from '@/store'
import type { Client } from '@/store/states/clients.store'
import { computed, reactive } from 'vue'
import { useStore } from 'vuex'

const store = useStore<StateType>()

//lấy dũ liệu nhập
const newClient = reactive<Client>({
  id: Math.floor(Math.random() * 100),
  email: '',
  pass: '',
  status: true
})

//nút đăng kí
const handleRegister = (clientRegisted: Client) => {
  commit('addAclient', clientRegisted)
}
</script>

<template>
  <div class="form">
    <h2>Register</h2>
    <input type="text" placeholder="Email..." v-model="newClient.email" /> <br />
    <input type="text" placeholder="Password..." v-model="newClient.pass" />
    <div>
      <button @click="handleRegister(newClient)">Register</button>
    </div>
  </div>
</template>

<style scoped>
.form {
  border: 2px solid cornflowerblue;
  padding: 10px;
}
</style>
