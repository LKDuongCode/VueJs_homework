<script setup>
import { ref } from 'vue'

// Khởi tạo mảng ảnh
const images = ref([
  'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
])

const img = ref(images.value[0])

const randomImages = (imgs) => {
  let randomIndex = Math.floor(Math.random() * 4)
  img.value = imgs[randomIndex]
}
</script>

<template>
  <div>
    <!-- Hiển thị ảnh đầu tiên trong mảng, kiểm tra mảng có giá trị -->
    <img :src="img" alt="Random Image" class="max-h-96 w-max" />

    <!-- Nút thay đổi ảnh -->
    <button @click="randomImages(images)">Change Image</button>
  </div>
</template>

<style scoped>
/* Bạn có thể thêm style nếu cần */
</style>
