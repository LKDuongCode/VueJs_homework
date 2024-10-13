<script setup lang="ts">
import type { StateType } from '@/store'
import type { Client } from '@/store/states/clients.store'
import { computed, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import ClientProfile from './ClientProfile.vue'

const store = useStore<StateType>()
const clients = computed(() => store.state.clients)
const clientLogin = reactive<any>({})

watch(clients.value, () => {
  const clientFound = clients.value.find((client: Client) => client.status === true)
  if (clientFound) Object.assign(clientLogin, clientFound)
  else console.log('not found')
})

//hàm đăng nhập
const handleLogin = (login: Client) => {
  const clientfound = clients.value.find((client: Client) => client.email === login.email)
  if (clientfound) Object.assign(clientLogin, clientfound)
  else console.log('not found')
}
</script>

<template>
  <div class="form">
    <h2>Login</h2>
    <input type="text" placeholder="Email..." v-model="clientLogin.email" /> <br />
    <input type="text" placeholder="Password..." v-model="clientLogin.pass" />
    <div>
      <button @click="handleLogin(clientLogin)">Login</button>
    </div>
  </div>
  <ClientProfile :login_data="clientLogin"></ClientProfile>
</template>

<style scoped>
.form {
  border: 2px solid cornflowerblue;
  padding: 10px;
}
</style>
