<script setup lang="ts">
const props = defineProps(['login_data'])
</script>

<template>
  <div style="border: 2px solid white; padding: 10px">
    <p>id:{{ props.login_data.id }}</p>
    <p>email:{{ props.login_data.email }}</p>
    <p>pass:{{ props.login_data.pass }}</p>
    <p>status:{{ props.login_data.status }}</p>
  </div>
</template>

<style scoped></style>
