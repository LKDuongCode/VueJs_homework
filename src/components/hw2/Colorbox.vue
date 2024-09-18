<script setup>
import { ref } from "vue";

// Tạo state reactive để lưu màu hiện tại
const currentColor = ref("red");

// Hàm thay đổi màu sắc
const setColor = (color) => {
  currentColor.value = color;
};
</script>

<template>
  <div>
    <!-- trong vue thì cú pháp binding sẽ không như reactjs,đó là một đối tượng chứa các cặp key và value , nếu value là true thì thêm vào dom. -->
    <div
      class="w-52 h-52"
      :class="{
        'bg-red-500': currentColor === 'red',
        'bg-blue-500': currentColor === 'blue',
        'bg-green-500': currentColor === 'green',
      }"
    ></div>

    <!-- Nút bấm để thay đổi màu sắc -->
    <div class="mt-4 space-x-4">
      <button
        @click="setColor('red')"
        class="px-4 py-2 bg-red-500 text-white rounded"
      >
        Red
      </button>
      <button
        @click="setColor('blue')"
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Blue
      </button>
      <button
        @click="setColor('green')"
        class="px-4 py-2 bg-green-500 text-white rounded"
      >
        Green
      </button>
    </div>
  </div>
</template>

<style scoped></style>
