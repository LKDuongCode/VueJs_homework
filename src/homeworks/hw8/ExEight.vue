<script setup>
import { computed, reactive } from 'vue'

//mảng đối tượng
const goods = reactive([
  { id: 1, name: 't-shirt' },
  { id: 2, name: 'apple' },
  { id: 3, name: 'laptop' }
])

//mảng cart
const carts = reactive([
  { id: 1, pro_id: 1, quantity: 2 },
  { id: 2, pro_id: 3, quantity: 1 },
  { id: 3, pro_id: 2, quantity: 4 }
])

//hàm tìm kiếm sản phẩm dựa trên id
const searchProductById = (arr, idSearch) => {
  const product = arr.find((product) => product.id === idSearch, 0)
  if (product) return product
  return undefined
}

//hàm tăng
const handleIncrease = (id) => {
  let index = carts.findIndex((cart) => cart.id === id)
  if (index !== -1) {
    carts[index].quantity = carts[index].quantity + 1
  }
}

//sử dụng computed tính tổng
const totalProductQuantity = computed(() => carts.reduce((total, cart) => total + cart.quantity, 0))
</script>

<template>
  <div>
    <h1>My Cart</h1>
    <ul>
      <li v-for="cart in carts" :key="cart.id">
        <span>{{ searchProductById(goods, cart.pro_id).name }} -- </span>
        <span>quantity : {{ cart.quantity }} -- </span>
        <button @click="handleIncrease(cart.id)">quantity increases</button>
      </li>
    </ul>
    <h3>Total quantity : {{ totalProductQuantity }}</h3>
  </div>
</template>

<style scoped></style>
