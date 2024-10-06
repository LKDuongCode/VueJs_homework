<script setup lang="ts"></script>

<template>
  <h1>App</h1>
  <div class="flex gap-5 my-5">
    <router-link active-class="active" class="border-emerald-600 border-solid border-2 px-5" to="/"
      >Home</router-link
    >
    <router-link
      active-class="active"
      class="border-emerald-600 border-solid border-2 px-5"
      to="/contact"
      >Contact</router-link
    >
    <router-link
      to="/dashboard"
      class="border-emerald-600 border-solid border-2 px-5"
      active-class="active"
      >Dash Board</router-link
    >
  </div>
  <div class="border-solid border-2 border-blue-400 p-5"><router-view></router-view></div>
</template>

<style scoped>
.active {
  background-color: #059669;
}
</style>
