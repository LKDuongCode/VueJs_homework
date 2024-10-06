<!-- không dùng tailwind vì xung đột với vuetify-->

<script setup lang="ts">
import { ref, computed } from 'vue'
// hiệu ứng UI-----------------------------------------------------------
const step = ref<number>(1)
const currentTitle = computed(() => {
  switch (step.value) {
    case 1:
      return 'Sign-up'
    case 2:
      return 'Create a password'
    default:
      return 'Account created'
  }
})
// hiệu ứng UI-----------------------------------------------------------

//validate----------------------------------------------------
const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => v.length >= 5 || 'The e-mail address must contain at least 5 characters',
  (v: string) => v.length <= 50 || 'The e-mail address cannot be longer than 50 characters',
  (v: string) => /.+@.+/.test(v) || 'Please enter a valid email address'
]
const passwordRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) => v.length >= 8 || 'Password must contain at least 8 characters',
  (v: string) => v.length <= 50 || 'Password cannot be longer than 50 characters'
]
//validate----------------------------------------------------

const email = ref<string>('')
const password = ref<string>('')
const confirmPassword = ref<string>('')

const handleSubmit = () => {
  // Xử lý khi người dùng gửi thông tin
}
</script>

<template>
  <div>
    <v-card class="mx-auto" width="100%" max-width="500">
      <v-card-title class="sign-up-title">
        <span>{{ currentTitle }}</span>
        <p class="step">Step {{ step }}</p>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              :counter="50"
              label="Email"
              minlength="5"
              maxlength="50"
              required
            ></v-text-field>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
            ></v-text-field>
            <v-text-field
              v-model="confirmPassword"
              :rules="passwordRules"
              label="Confirm Password"
              type="password"
            ></v-text-field>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
            ></v-img>
            <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
            <span class="caption grey--text">Thanks for signing up!</span>
          </div>
        </v-window-item>
      </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn :disabled="step === 1" @click="step--"> Back </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="step === 3" color="primary" depressed @click="step++"> Next </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<!-- thêm sass: npm add -D sass -->
<style scoped lang="scss">
.sign-up-title {
  display: flex;
  justify-content: space-between;

  .step {
    color: cornflowerblue;
    font-size: medium;
  }
}
</style>
