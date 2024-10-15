<script setup lang="ts">
import { ref } from 'vue'
import { uploadFile } from '@/utils/uploadFile'

// Biến lưu trữ file người dùng chọn
const selectedFile = ref<File | null>(null)

// Biến lưu trữ URL sau khi upload thành công
const fileURL = ref<string | null>(null)

// Biến lưu trữ trạng thái thông báo
const message = ref<string>('')

// Hàm xử lý sự kiện khi người dùng chọn file
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0]
  }
}

// Hàm xử lý upload file lên Firebase
const handleUpload = async () => {
  if (!selectedFile.value) {
    message.value = 'Vui lòng chọn một file!'
    return
  }

  try {
    // Gọi hàm uploadFile, truyền vào file và đường dẫn thư mục
    const url = await uploadFile(selectedFile.value, 'homeworks')

    if (url) {
      fileURL.value = url
      message.value = 'Upload thành công!'
    } else {
      message.value = 'Upload thất bại!'
    }
  } catch (error: any) {
    message.value = `Đã xảy ra lỗi: ${error.message}`
  }
}
</script>

<template>
  <div class="upload-container">
    <h2>Upload File</h2>

    <input type="file" @change="handleFileChange" />

    <button @click="handleUpload">Upload</button>

    <p v-if="message">{{ message }}</p>

    <div v-if="fileURL">
      <p>File đã upload:</p>
      <a :href="fileURL" target="_blank">{{ fileURL }}</a>
    </div>
  </div>
</template>

<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: auto;
}

button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

p {
  color: red;
}
</style>
