<!-- 
- lấy tất cả hỉnh ảnh trên firebase
- xóa một hình ảnh trên firebase
-->

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  listAll,
  getDownloadURL,
  ref as storageRef,
  deleteObject,
} from 'firebase/storage'
import { storage } from '@/firebase/config'

// Biến lưu trữ danh sách hình ảnh và đường dẫn của chúng
const imageUrls = ref<{ url: string; path: string }[]>([])

// Hàm lấy danh sách tất cả các hình ảnh từ Firebase Storage
const fetchImages = async () => {
  const folderRef = storageRef(storage, 'homeworks')

  try {
    const res = await listAll(folderRef)

    // Lấy URL tải về cho từng file
    const promises = res.items.map(async itemRef => {
      const url = await getDownloadURL(itemRef)
      return { url, path: itemRef.fullPath } // Lưu URL và đường dẫn của file
    })

    imageUrls.value = await Promise.all(promises) // Đợi tất cả các URL được lấy
  } catch (error) {
    console.error('Lỗi khi lấy danh sách hình ảnh:', error)
  }
}

// Hàm xử lý việc xóa một hình ảnh
const deleteImage = async (filePath: string) => {
  const imageRef = storageRef(storage, filePath)

  try {
    await deleteObject(imageRef) // Xóa file từ Firebase Storage
    imageUrls.value = imageUrls.value.filter(img => img.path !== filePath) // Cập nhật danh sách hình ảnh
    alert('Xóa hình ảnh thành công!')
  } catch (error) {
    console.error('Lỗi khi xóa hình ảnh:', error)
    alert('Đã xảy ra lỗi khi xóa hình ảnh.')
  }
}

onMounted(() => {
  fetchImages()
})
</script>

<template>
  <div class="image-list-container">
    <div v-if="imageUrls.length">
      <h2>Uploaded Images:</h2>
      <div class="image-grid">
        <div
          v-for="(image, index) in imageUrls"
          :key="index"
          class="image-item"
        >
          <img :src="image.url" alt="Uploaded Image" class="image-preview" />
          <button @click="deleteImage(image.path)">Xóa</button>
        </div>
      </div>
    </div>
    <p v-else>Không có hình ảnh nào.</p>
  </div>
</template>

<style scoped>
.image-list-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
}

.image-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.image-preview {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 2px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0.25rem 0.5rem;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: darkred;
}
</style>
