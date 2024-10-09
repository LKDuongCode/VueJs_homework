<script setup lang="ts">
import { baseUrl } from '@/api'
import type { Product } from '@/interfaces/ProductType'
import { validateProductName } from '@/utils/validateExistProductName'
import { onMounted, reactive } from 'vue'

// lấy dữ liệu từ api
const products = reactive<Product[]>([])
const getAllProduct = async () => {
  try {
    const res = await fetch(`${baseUrl}/products`)
    const data = await res.json()
    products.push(...data)
  } catch (error) {
    alert(error)
  }
}
onMounted(() => getAllProduct())

//tạo emit
const emit = defineEmits(['close', 'add'])
//phát sự kiện
const closeAddForm = () => {
  emit('close', false)
}
const confirmAdd = () => {
  if (newProduct.p_name === '' || newProduct.p_img === '') {
    validate.empty = true
    return
  }
  if (newProduct.p_price < 10) {
    validate.minPrice = true
    return
  }
  if (newProduct.p_quantity < 1 || newProduct.p_quantity > 100) {
    validate.quantityLimited = true
    return
  }
  if (validateProductName(products, newProduct.p_name, 'add')) {
    validate.existName = true
    return
  }
  emit('add', newProduct)
}

//lấy thông tin người dùng
const newProduct = reactive({
  p_img: '',
  p_name: '',
  p_price: 0,
  p_quantity: 0
})

//validate
const validate = reactive({
  empty: false,
  minPrice: false,
  quantityLimited: false,
  existName: false
})
// ẩn thông báo khi foccus
const handleFocus = () => {
  validate.empty = false
  validate.minPrice = false
  validate.quantityLimited = false
  validate.existName = false
}
</script>

<template>
  <div class="bg-[#EEEEEE] text-[#333] w-96 p-5 rounded">
    <h3 class="text-center text-blue-400">Add a new product</h3>
    <hr />
    <div class="flex flex-col gap-4 mt-3">
      <div>
        <p class="font-semibold">Name</p>
        <input
          type="text"
          class="w-full mt-1 px-3 py-1 rounded"
          @click="handleFocus"
          v-model="newProduct.p_name"
        />
      </div>
      <div>
        <p class="font-semibold">Image</p>
        <input
          type="text"
          class="w-full mt-1 px-3 py-1 rounded"
          @click="handleFocus"
          v-model="newProduct.p_img"
        />
      </div>
      <div>
        <p class="font-semibold">Price</p>
        <input
          type="number"
          class="w-full mt-1 px-3 py-1 rounded"
          @click="handleFocus"
          min="10"
          v-model="newProduct.p_price"
        />
      </div>
      <div>
        <p class="font-semibold">Quantity</p>
        <input
          type="number"
          min="1"
          max="100"
          class="w-full mt-1 px-3 py-1 rounded"
          @click="handleFocus"
          v-model="newProduct.p_quantity"
        />
      </div>
      <!-- validate -->
      <div>
        <p v-show="validate.empty" class="text-red-500 bg-red-100 px-3 text-sm font-medium">
          Data fields cannot be left blank!
        </p>
        <p v-show="validate.existName" class="text-red-500 bg-red-100 px-3 text-sm font-medium">
          Product name already exists!
        </p>
        <p v-show="validate.minPrice" class="text-red-500 bg-red-100 px-3 text-sm font-medium">
          Minimum price is $10!
        </p>
        <p
          v-show="validate.quantityLimited"
          class="text-red-500 bg-red-100 px-3 text-sm font-medium"
        >
          Minimum quantity is 1 and maximum is 100!
        </p>
      </div>
      <div class="flex gap-5 justify-end">
        <button
          class="rounded text-sm font-semibold py-1 text-white bg-[#888]"
          @click="closeAddForm"
        >
          Cancel
        </button>
        <button
          class="rounded text-sm font-semibold py-1 text-white bg-blue-400"
          @click="confirmAdd"
        >
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
