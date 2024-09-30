<script setup>
import ProductChild from './ProductChild.vue'

//khai báo đối tượng
const product = {
  id: 1,
  name: 'mèn mén',
  price: 100,
  quantity: 20
}
</script>

<template>
  <ProductChild :product="product"></ProductChild>
</template>

<style scoped></style>
