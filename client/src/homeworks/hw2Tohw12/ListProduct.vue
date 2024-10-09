<script setup lang="ts">
import { baseUrl } from '@/api'
import type { Product } from '@/interfaces/ProductType'
import { onMounted, reactive, ref } from 'vue'
import DeleteModalComponent from '../components/DeleteModalComponent.vue'
import AddModalComponent from '../components/AddModalComponent.vue'
import UpdateModalComponent from '../components/UpdateModalComponent.vue'
// hàm tạo request
const createRequest = (methodCln: string, bodyData: any) => {
  return {
    method: methodCln,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyData)
  }
}
//hw2 get---------------------------------------------------------------------------------------
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

// hw3 detail------------------------------------------------------------------------------------
const getProductById = async (p_id: number) => {
  try {
    const res = await fetch(`${baseUrl}/products/${p_id}`)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    alert('không tìm thấy sản phẩm!')
  }
}

//hw4 delete---------------------------------------------------------------------------
const removeProductById = async (idRemoved: number) => {
  try {
    await fetch(`${baseUrl}/products/${idRemoved}`, { method: 'DELETE' })
  } catch (error) {
    alert(error)
  }
}

//hw5 create-----------------------------------------------------------------------------
const createProduct = async (productAdded: any) => {
  try {
    const res = await fetch(`${baseUrl}/products`, createRequest('POST', productAdded))
    const data = await res.json()
    console.log(data)
  } catch (error) {
    alert(error)
  }
}

//hw6 update------------------------------------------------------------------------------
const updateProduct = async (product: Product) => {
  try {
    const res = await fetch(`${baseUrl}/products/${product.id}`, createRequest('PATCH', product))
    const data = await res.json()
    console.log(data)
  } catch (error) {
    alert(error)
  }
}

//hw7 redner ra giao diện------------------------------------------------------------------------
// hw8 thực hiện chức năng xóa------------------------------------------------------------------
const deleteByIdConfirm = ref<boolean>(false)
const idDeleted = ref<number>(0)
const handleDeleteByID = (id: number) => {
  deleteByIdConfirm.value = true
  idDeleted.value = id
}
//hàm nhận sự kiện đóng form
const getEventCloseFromDeleteForm = (eventClose: boolean) => {
  deleteByIdConfirm.value = eventClose
}
//ham nhận sự kiện xác nhận xóa
const getEventDeleteFromDeleteForm = (id: number) => {
  removeProductById(id)
  //cập nhật ui
  const index = products.findIndex((p) => p.id === id)
  if (index !== -1) {
    products.splice(index, 1)
  } else {
    console.log(`Product with id ${id} not found.`)
  }
}

//hw9 thực hiện chức năng add ---------------------------------------------------------------------------
const addAnewProductConfirm = ref<boolean>(false)
const handleAdd = () => {
  addAnewProductConfirm.value = true
}

const getEventCloseFromAddForm = (eventClose: boolean) => {
  addAnewProductConfirm.value = eventClose
}

const getEventAddFromAddForm = (newProduct: any) => {
  createProduct(newProduct)
  //cập nhật ui
  products.push({ ...newProduct })
  addAnewProductConfirm.value = false
}

//hw10 thực hiện chức năng update-------------------------------------------------------------------------------
const updateAproductConfirm = ref<boolean>(false)
const handleUpdate = (product: Product) => {
  updateAproductConfirm.value = true
  productNeedUpdated.value = product
}
const getEventCloseFromUpdateForm = (eventClose: boolean) => {
  updateAproductConfirm.value = eventClose
}

//đói tượng được truyền qua modal
const productNeedUpdated = ref()

//ham nhận sự kiện xác nhận update
const getEventUpdateFromUpdateForm = (product: Product) => {
  updateProduct(product)
  const index = products.findIndex((p) => p.id === product.id)
  if (index !== -1) {
    products[index] = { ...product }
  }
  updateAproductConfirm.value = false
}
</script>

<template>
  <div>
    <button @click="getProductById(2)">get detail</button>
    <hr />
    <h2 class="text-teal-500 mt-5 font-bold">Product Management</h2>
    <div class="setup-border mt-5 p-5 flex flex-col gap-5">
      <div class="flex justify-between">
        <div>
          <button class="bg-blue-400 text-white" @click="handleAdd">Thêm mới sản phẩm</button>
        </div>
      </div>

      <!-- table -->
      <div class="overflow-x-auto">
        <table class="min-w-full border">
          <thead>
            <tr class="bg-[#666]">
              <th class="border-b px-4 py-2 text-left">#</th>
              <th class="border-b px-4 py-2 text-left">Tên Sản Phẩm</th>
              <th class="border-b px-4 py-2 text-left">Hình Ảnh</th>
              <th class="border-b px-4 py-2 text-left">Giá</th>
              <th class="border-b px-4 py-2 text-left">Số Lượng</th>
              <th class="border-b px-4 py-2 text-left">Chức Năng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
              <td class="border-b px-4 py-2">{{ index + 1 }}</td>
              <td class="border-b px-4 py-2">{{ product.p_name }}</td>
              <td class="border-b px-4 py-2">
                <img :src="product.p_img" alt="Banana" class="w-16 h-16 object-cover" />
              </td>
              <td class="border-b px-4 py-2">${{ product.p_price }}</td>
              <td class="border-b px-4 py-2">{{ product.p_quantity }}</td>
              <td class="border-b px-4 py-2">
                <button class="bg-amber-400 text-white mr-3" @click="handleUpdate(product)">
                  Sửa
                </button>
                <button class="bg-red-400 text-white" @click="handleDeleteByID(product.id)">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- modal -->
    <div>
      <!-- delete -->
      <div
        v-if="deleteByIdConfirm"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <DeleteModalComponent
          @close="getEventCloseFromDeleteForm"
          :id_delete="idDeleted"
          @delete="getEventDeleteFromDeleteForm"
        ></DeleteModalComponent>
      </div>
      <!-- add -->
      <div
        v-if="addAnewProductConfirm"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <AddModalComponent
          @close="getEventCloseFromAddForm"
          @add="getEventAddFromAddForm"
        ></AddModalComponent>
      </div>
      <!-- update -->
      <div
        v-if="updateAproductConfirm"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <UpdateModalComponent
          :product_detail="productNeedUpdated"
          @close="getEventCloseFromUpdateForm"
          @update="getEventUpdateFromUpdateForm"
        ></UpdateModalComponent>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
