<script setup lang="ts">
import { ref } from 'vue'

const login = ref('')
const password = ref('')

// Hàm xử lý đăng nhập
const handleLogin = () => {
  // Thêm logic đăng nhập ở đây
  console.log('Login:', login.value)
  console.log('Password:', password.value)
}
</script>

<template>
  <v-card width="600">
    <v-toolbar color="primary">
      <v-toolbar-title>Login </v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <v-form>
        <v-text-field name="login" label="Login" type="text" v-model="login"></v-text-field>

        <v-text-field
          id="password"
          name="password"
          label="Password"
          type="password"
          v-model="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <hr />
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="handleLogin">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped></style>
