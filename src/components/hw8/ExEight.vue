<script setup lang="ts">
import { reactive } from 'vue'

type User = {
  id: number
  fullname: string
  email: string
  password: string
  rePass: string
}

const user = reactive<User>({
  id: Math.floor(Math.random() * 100),
  email: '',
  fullname: '',
  password: '',
  rePass: ''
})

const handleRegister = () => {
  console.log(user)
}
</script>

<template>
  <div class="form-add-product">
    <h3>Create a new account</h3>
    <hr />
    <div>
      <p>Fullname</p>
      <input type="text" v-model="user.fullname" />
    </div>
    <div>
      <p>Email</p>
      <input type="text" v-model="user.email" />
    </div>
    <div>
      <p>Password</p>
      <input type="text" v-model="user.password" />
    </div>
    <div>
      <p>Re-password</p>
      <input type="text" v-model="user.rePass" />
    </div>
    <div style="display: flex; justify-content: center">
      <button class="addBtn" @click="handleRegister">Register</button>
    </div>
  </div>
</template>

<style scoped>
.form-add-product {
  border-width: 2px;
  border: solid;
  border-color: burlywood;
  width: max-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}
.addBtn {
  padding: 6px 20px;
  font-family: monospace;
  font-weight: 600;
  background-color: burlywood;
  color: white;
}
input {
  width: 100%;
  outline: none;
  font-family: monospace;
}
</style>
