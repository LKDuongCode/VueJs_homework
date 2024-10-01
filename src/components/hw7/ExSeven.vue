<script setup lang="ts">
import { reactive } from 'vue'
type Product = {
  id: string
  name: string
  price: number
  quantity: number
}

//taok khuôn
const product = reactive<Product>({
  id: '',
  name: '',
  price: 0,
  quantity: 0
})

const handleAdd = () => {
  if (product.id !== '' && product.name !== '' && product.price !== 0 && product.quantity !== 0) {
    console.log(product)
  }
}
</script>

<template>
  <div class="form-add-product">
    <h3>Add a new product</h3>
    <hr />
    <div>
      <p>Product code</p>
      <input type="text" v-model="product.id" />
    </div>
    <div>
      <p>Product name</p>
      <input type="text" v-model="product.name" />
    </div>
    <div>
      <p>Product price</p>
      <input type="text" v-model="product.price" />
    </div>
    <div>
      <p>Product quantity</p>
      <input type="number" v-model="product.quantity" />
    </div>
    <div style="display: flex; justify-content: center">
      <button class="addBtn" @click="handleAdd">Add</button>
    </div>
  </div>
</template>

<style scoped>
.form-add-product {
  border-width: 2px;
  border: solid;
  border-color: cornflowerblue;
  width: max-content;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}
.addBtn {
  padding: 6px 20px;
  font-family: monospace;
  font-weight: 600;
  background-color: cornflowerblue;
  color: white;
}
input {
  width: 100%;
}
</style>
