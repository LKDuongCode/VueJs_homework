<script setup>
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
//tạo biến lưu trữ giá trị nhận được
const id = ref(0)
//hàm hứng giá trị từ con
const getId = (data) => {
  id.value = data
}
</script>

<template>
  <div>TodoApp---------------------</div>
  <div>ID is deleted = {{ id }}</div>
  <div>
    <TodoItem @id-delete="getId"></TodoItem>
  </div>
</template>

<style scoped></style>
