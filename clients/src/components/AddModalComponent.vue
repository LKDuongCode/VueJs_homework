<script setup lang="ts"></script>

<template>
  <div
    class="container mx-auto neon-bg shadow-md rounded-lg p-6 relative w-[530px] border-2 border-[#555]"
  >
    <button
      class="absolute top-2 right-2 text-white text-2xl hover:text-red-500"
    >
      &times;
      <!-- Ký hiệu "X" để đóng -->
    </button>
    <h2 class="text-xl font-bold mb-4 neon">Thêm Mới Bài Viết</h2>

    <div class="mb-4">
      <label class="block text-gray-300 mb-1">Tên Bài Viết:</label>
      <input
        type="text"
        placeholder="Nhập tên bài viết"
        class="border border-gray-600 rounded-md p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-300 mb-1">Hình Ảnh URL:</label>
      <input
        type="url"
        placeholder="Nhập URL hình ảnh"
        class="border border-gray-600 rounded-md p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-300 mb-1">Nội Dung:</label>
      <textarea
        placeholder="Nhập nội dung bài viết"
        class="border border-gray-600 rounded-md p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full h-32"
      ></textarea>
    </div>

    <div class="flex justify-end space-x-4">
      <button
        class="bg-transparent text-green-400 border-2 border-green-400 font-bold hover:bg-green-500 hover:text-white hover:shadow-lg transition duration-300 px-4 py-2"
      >
        Làm Mới
      </button>
      <button
        class="bg-transparent text-blue-400 border-2 border-blue-400 font-bold hover:bg-blue-500 hover:text-white hover:shadow-lg transition duration-300 px-4 py-2"
      >
        Xuất
      </button>
    </div>
  </div>
</template>

<style scoped></style>
