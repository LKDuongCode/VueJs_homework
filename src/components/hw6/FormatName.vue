<script setup>
const user = {
  fname: "Nguyen Van",
  lname: "Nam",
};
const formatName = (user) => {
  return `${user.fname} ${user.lname}`;
};
</script>

<template>
  <div class="m-10">Fullname : {{ formatName(user) }}</div>
</template>

<style scoped></style>
