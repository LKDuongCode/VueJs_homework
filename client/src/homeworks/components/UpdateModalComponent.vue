<script setup lang="ts">
import type { Product } from '@/interfaces/ProductType'
import { onMounted, reactive } from 'vue'

//tạo emit
const emit = defineEmits(['close', 'update'])
//phát sự kiện
const closeUpdateForm = () => {
  emit('close', false)
}
const confirmUpdate = (product: Product) => {
  emit('update', product)
}

//lấy thông tin người dùng
const productUpdated = reactive<Product>({
  id: 0,
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

//nhận props
const props = defineProps(['product_detail'])
onMounted(() => {
  productUpdated.id = props.product_detail.id
  productUpdated.p_img = props.product_detail.p_img
  productUpdated.p_name = props.product_detail.p_name
  productUpdated.p_price = props.product_detail.p_price
  productUpdated.p_quantity = props.product_detail.p_quantity
})
</script>

<template>
  <div class="bg-[#EEEEEE] text-[#333] w-96 p-5 rounded">
    <h3 class="text-center text-green-400">Edit a product</h3>
    <hr />
    <div class="flex flex-col gap-4 mt-3">
      <div>
        <p class="font-semibold">Name</p>
        <input
          type="text"
          class="w-full mt-1 px-3 py-1 rounded"
          @click="handleFocus"
          v-model="productUpdated.p_name"
        />
      </div>
      <div>
        <p class="font-semibold">Image</p>
        <input
          type="text"
          class="w-full mt-1 px-3 py-1 rounded"
          @click="handleFocus"
          v-model="productUpdated.p_img"
        />
      </div>
      <div>
        <p class="font-semibold">Price</p>
        <input
          type="number"
          class="w-full mt-1 px-3 py-1 rounded"
          @click="handleFocus"
          min="10"
          v-model="productUpdated.p_price"
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
          v-model="productUpdated.p_quantity"
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
          @click="closeUpdateForm"
        >
          Cancel
        </button>
        <button
          class="rounded text-sm font-semibold py-1 text-white bg-green-400"
          @click="confirmUpdate(productUpdated)"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
