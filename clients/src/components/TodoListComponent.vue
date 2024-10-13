<script setup lang="ts">
import type { Task } from "@/interfaces/TaskType";
import { tasksInstance } from "@/utils/instances";
import { onMounted, reactive } from "vue";

const tasks = reactive<Task[]>([]);
const getPostsAPI = async () => {
  try {
    const res = await tasksInstance.get("/");
    // Xóa tất cả các phần tử hiện có trong mảng posts
    tasks.splice(0, tasks.length);
    // Thêm các phần tử mới từ res.data vào mảng posts
    tasks.push(...res.data);
  } catch (err) {
    alert(err);
  }
};

onMounted(() => getPostsAPI());
</script>

<template>
  <div>
    <div class="mx-auto shadow-md rounded-lg p-6 border-2 border-[#555]">
      <div>
        <h3
          class="text-center text-3xl pb-5 font-mono font-bold text-amber-400"
        >
          My Todolist
        </h3>
      </div>
      <!-- Input thêm công việc -->
      <div class="mb-4 flex">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          class="border border-gray-600 rounded-md p-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow"
        />
        <button
          class="bg-green-500 text-white rounded-md px-4 py-2 ml-2 hover:bg-green-600 transition"
        >
          Thêm mới công việc
        </button>
      </div>

      <!-- Nav -->
      <div class="flex justify-around mb-4">
        <button
          class="border-2 border-green-400 bg-transparent text-white font-bold hover:bg-green-500 hover:text-white transition duration-300 px-4 py-2 rounded-md"
        >
          Tất cả
        </button>
        <button
          class="border-2 border-green-400 bg-transparent text-white font-bold hover:bg-green-500 hover:text-white transition duration-300 px-4 py-2 rounded-md"
        >
          Hoàn thành
        </button>
        <button
          class="border-2 border-green-400 bg-transparent text-white font-bold hover:bg-green-500 hover:text-white transition duration-300 px-4 py-2 rounded-md"
        >
          Đang thực hiện
        </button>
      </div>

      <!-- Danh sách công việc -->
      <div class="space-y-2 mb-4">
        <div
          class="flex items-center bg-gray-800 p-2 rounded-md"
          v-for="(task, index) in tasks"
          :key="index"
        >
          <input type="checkbox" class="mr-2" />
          <span class="text-gray-300 flex-grow">{{ task.name }}</span>
          <button
            class="border-2 border-blue-400 bg-transparent text-blue-400 font-bold hover:bg-blue-500 hover:text-white transition duration-300 px-2 py-1 mr-2 rounded-md"
          >
            Sửa
          </button>
          <button
            class="border-2 border-red-400 bg-transparent text-red-400 font-bold hover:bg-red-500 hover:text-white transition duration-300 px-2 py-1 rounded-md"
          >
            Xóa
          </button>
        </div>

        <!-- Thêm các công việc khác ở đây -->
      </div>

      <!-- Nút chức năng -->
      <div class="flex justify-between">
        <button
          class="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition"
        >
          Xóa công việc đã hoàn thành
        </button>
        <button
          class="bg-gray-600 text-white rounded-md px-4 py-2 hover:bg-gray-700 transition"
        >
          Xóa tất cả công việc
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
