<script setup>
// tạo emit
const emit = defineEmits(['id-delete'])
//hàm phát sự kiện
const handleDelete = (id) => {
  emit('id-delete', id)
}
</script>

<template>
  <div>TodoItem-------------------------</div>
  <div>
    <button @click="handleDelete(2)">delete</button>
  </div>
</template>

<style scoped></style>
