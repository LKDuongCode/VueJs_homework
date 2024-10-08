<script setup lang="ts"></script>

<template>
  <div class="flex gap-5">
    <router-link to="/admin" exact-active-class="active" class="setup-border border-blue-400 px-5"
      >Dashboard</router-link
    >
    <router-link
      to="/admin/manager-user"
      exact-active-class="active"
      class="setup-border border-blue-400 px-5"
      >Users</router-link
    >
    <router-link
      to="/admin/manager-product"
      exact-active-class="active"
      class="setup-border border-blue-400 px-5"
      >Products</router-link
    >
    <router-link
      to="/admin/settings"
      exact-active-class="active"
      class="setup-border border-blue-400 px-5"
      >Settings</router-link
    >
  </div>

  <div class="setup-border p-5 mt-5">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.active {
  @apply bg-blue-400;
}
</style>
