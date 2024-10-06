<script setup lang="ts"></script>

<template>
  <div class="flex gap-5">
    <router-link
      exact-active-class="active"
      class="border-amber-600 border-solid border-2 px-5"
      to="/dashboard"
      >Product</router-link
    >
    <router-link
      active-class="active"
      class="border-amber-600 border-solid border-2 px-5"
      to="/dashboard/account"
      >Account</router-link
    >
  </div>

  <div class="border-solid border-2 border-amber-400 p-5 mt-5"><router-view></router-view></div>
</template>

<style scoped>
.active {
  background-color: blue;
  color: #fff;
  font-weight: 700;
}
</style>
