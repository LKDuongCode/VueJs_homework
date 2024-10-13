<script setup lang="ts">
import type { Post } from '@/interfaces/PostType'
import { postsInstance } from '@/utils/instances'
import { onMounted, reactive } from 'vue'

const posts = reactive<Post[]>([])
const getPostsAPI = async () => {
  try {
    const res = await postsInstance.get('/')
    // Xóa tất cả các phần tử hiện có trong mảng posts
    posts.splice(0, posts.length)
    // Thêm các phần tử mới từ res.data vào mảng posts
    posts.push(...res.data)
  } catch (err) {
    alert(err)
  }
}

onMounted(() => getPostsAPI())
</script>

<template>
  <div>
    <div class="container mx-auto neon-bg shadow-md rounded-lg p-6">
      <!-- Div Con 1 -->
      <div class="flex justify-between items-center mb-4">
        <div class="flex space-x-4">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết"
            class="border-2-2 border-2-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-800 text-white"
          />
          <select
            class="border-2-2 border-2-gray-600 rounded-md p-2 bg-gray-800 text-white"
          >
            <option value="" class="text-red-400">Lọc bài viết</option>
            <option value="1">Danh mục 1</option>
            <option value="2">Danh mục 2</option>
            <option value="3">Danh mục 3</option>
          </select>
        </div>
        <button
          class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-400"
        >
          Thêm mới bài viết
        </button>
      </div>

      <!-- Div Con 2 -->
      <div class="overflow-x-auto overflow-y-scroll max-h-[400px]">
        <table class="min-w-full bg-gray-800 border-2 border-gray-600">
          <thead>
            <tr class="bg-gray-700 text-left text-gray-200">
              <th class="py-3 px-4 border-2-b">#</th>
              <th class="py-3 px-4 border-2-b">Tiêu đề</th>
              <th class="py-3 px-4 border-2-b">Hình ảnh</th>
              <th class="py-3 px-4 border-2-b">Ngày tạo</th>
              <th class="py-3 px-4 border-2-b">Trạng thái</th>
              <th class="py-3 px-4 border-2-b">Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-2-b" v-for="(post, index) in posts" :key="index">
              <td class="py-3 px-4 text-gray-300">{{ index + 1 }}</td>
              <td class="py-3 px-4 text-gray-300">{{ post.p_title }}</td>
              <td class="py-3 px-4">
                <img
                  :src="post.p_img"
                  alt="Image"
                  class="rounded h-[60px] w-[100px]"
                />
              </td>
              <td class="py-3 px-4 text-gray-300">{{ post.p_created_at }}</td>
              <td class="py-3 px-4 text-gray-300">
                {{ post.p_status ? 'Hoạt động' : 'Bị chặn' }}
              </td>
              <td class="py-3 px-4">
                <button
                  class="bg-transparent text-green-400 border-2 border-green-400 font-bold hover:bg-green-500 hover:text-white hover:shadow-lg transition duration-300 px-4 py-2 mr-2"
                >
                  Sửa
                </button>
                <button
                  class="bg-transparent text-red-400 border-2 border-red-400 font-bold hover:bg-red-500 hover:text-white hover:shadow-lg transition duration-300 px-4 py-2 mr-2"
                >
                  Xóa
                </button>
                <button
                  class="bg-transparent text-yellow-400 border-2 border-yellow-400 font-bold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-4 py-2"
                >
                  Chặn
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.neon {
  text-shadow:
    0 0 5px #00ff99,
    0 0 10px #00ff99,
    0 0 15px #00ff99;
}
.neon-bg {
  background-color: #222;
  border-2: 1px solid #00ff99;
}
.hover\:bg-blue-500:hover {
  background-color: #00ff99;
}
.hover\:bg-red-500:hover {
  background-color: #ff007f;
}
</style>
