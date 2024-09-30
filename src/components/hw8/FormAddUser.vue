<script setup>
//emit
const emit = defineEmits(['close'])
//phát sự kiện
const handleClose = () => {
  emit('close', 'closeForm')
}
</script>

<template>
  <div>FormAddUser-----------------------------</div>
  <div
    style="display: flex; flex-direction: column; gap: 10px; background-color: #555; padding: 10px"
  >
    <div style="display: flex; flex-direction: column; gap: 4px">
      <label for="name">Name</label>
      <input type="text" style="background-color: #666; color: white; outline: none" name="name" />
    </div>
    <div style="display: flex; flex-direction: column; gap: 4px">
      <label for="email">Email</label>
      <input type="text" style="background-color: #666; color: white; outline: none" name="email" />
    </div>
    <div style="display: flex; flex-direction: column; gap: 4px">
      <label for="address">Address</label>
      <input
        type="text"
        style="background-color: #666; color: white; outline: none"
        name="address"
      />
    </div>
    <div style="display: flex; justify-content: end">
      <button style="background-color: cornflowerblue" @click="handleClose">close</button>
    </div>
  </div>
</template>

<style scoped></style>
