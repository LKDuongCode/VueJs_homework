<script setup lang="ts">
import type { Student } from '@/interfaces/StudentType'

//truyền sự kiện đến cha
const emit = defineEmits(['close', 'delete'])
const closeDeleteModal = () => emit('close')

//nhận thông tin từ cha
const props = defineProps(['student_deleted'])

//xác nhận xóa
const handleDelete = (student: Student) => {
  emit('delete', student)
  closeDeleteModal()
}
</script>

<template>
  <teleport to="body">
    <div class="fixed top-0 left-0 flex justify-center items-center bg-[#00000080] w-full h-full">
      <div class="bg-[#eee] text-[#333] w-96 p-5 rounded">
        <h3 class="text-left text-red-400">Delete warming</h3>
        <p>
          Are you sure you want to delete student
          <span class="text-red-400 font-semibold">"{{ props.student_deleted?.s_name }}"</span>?
        </p>
        <hr class="border-[#999] border-solid my-4" />

        <div class="flex gap-5 justify-end">
          <button
            class="rounded text-sm font-semibold py-1 text-white bg-[#777]"
            @click="closeDeleteModal"
          >
            Cancel
          </button>
          <button
            class="rounded text-sm font-semibold py-1 text-white bg-red-400"
            @click="handleDelete(props.student_deleted)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped></style>
