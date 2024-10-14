<script setup lang="ts">
import MyCart from "./components/MyCart.vue";
import ProductList from "./components/ProductList.vue";
</script>

<template>
  <div class="flex gap-5">
    <ProductList></ProductList>
    <MyCart></MyCart>
  </div>
</template>

<style scoped></style>
