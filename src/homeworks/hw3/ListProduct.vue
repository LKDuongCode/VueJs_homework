<script setup lang="ts">
import type { StateType } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

//lấy data
const store = useStore<StateType>()
const products = computed(() => store.state.products)
</script>

<template>
  <div>
    <div>
      <table border="1" style="border-collapse: collapse">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qunatity</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.id }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
