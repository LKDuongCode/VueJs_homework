<script setup lang="ts">
import { ref } from 'vue'

// Định nghĩa các biến với type
const firstName = ref<string>('')
const firstNameRules = [
  (value: string | null | undefined) => {
    if (value && value.length >= 3) return true
    return 'First name must be at least 3 characters.'
  }
]

const lastName = ref<string>('123')
const lastNameRules = [
  (value: string | null | undefined) => {
    if (value && /[^0-9]/.test(value)) return true
    return 'Last name can not contain digits.'
  }
]
</script>

<template>
  <div>
    <v-sheet class="mx-auto" width="300">
      <h3>Form</h3>
      <v-form fast-fail @submit.prevent>
        <v-text-field v-model="firstName" :rules="firstNameRules" label="First name"></v-text-field>

        <v-text-field v-model="lastName" :rules="lastNameRules" label="Last name"></v-text-field>

        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<style scoped></style>
