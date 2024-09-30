<script setup>
const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      id: 0,
      name: '',
      price: 0,
      quantity: 0
    })
  }
})
</script>

<template>
  <div>props.ProductChild Data :</div>

  <div>
    <p>ID: {{ props.product.id }}</p>
    <p>Name: {{ props.product.name }}</p>
    <p>Price: {{ props.product.price }}</p>
    <p>Quantity: {{ props.product.quantity }}</p>
  </div>
</template>

<style scoped></style>
