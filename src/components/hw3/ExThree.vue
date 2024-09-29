<script setup>
const allowedRoles = ['admin', 'user', 'guest']
const useRole = 'admin'

// kiểm tra xem giá trị có nằm trong vùng quy định không (khi không dùng ts được)
const setRole = (role) => {
  if (allowedRoles.includes(role)) {
    console.log(`Role is set to: ${role}`)
    return role
  } else {
    console.error(`Invalid role: ${role}`)
    return 'invalid'
  }
}

let currentRole = setRole(useRole)
</script>

<template>
  <div>Your right is : {{ currentRole }}</div>
</template>

<style scoped></style>
