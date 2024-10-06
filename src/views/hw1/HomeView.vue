<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex gap-5">
      <router-link
        exact-active-class="active"
        class="border-amber-600 border-solid border-2 px-5"
        to="/list_user"
        >list user</router-link
      >
      <router-link
        exact-active-class="active"
        class="border-amber-600 border-solid border-2 px-5"
        to="/employees"
        >employees</router-link
      >
      <p class="text-white">click button to render</p>
    </div>

    <div class="border-solid border-2 border-amber-400 p-5 mt-5"><router-view></router-view></div>
  </div>
</template>

<style scoped>
.active {
  background-color: #fbbf24;
  color: #333;
}
</style>
