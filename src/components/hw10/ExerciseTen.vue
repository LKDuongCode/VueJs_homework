<script setup>
import { ref } from 'vue'

const valueInput = ref('')
const checkValue = (event) => {
  // Nếu đã có nội dung bên trong.
  if (valueInput.value !== '') {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        alert('Thông tin: ' + valueInput.value)
      } else {
        alert('Bạn cần nhấn Shift + Enter để hiển thị thông tin')
      }
    }
  }
}
</script>

<template>
  <div>
    <input
      type="text"
      placeholder="write something..."
      @keydown.shift.enter="checkValue"
      @keydown.enter.exact="checkValue"
      v-model="valueInput"
    />
  </div>
</template>

<style scoped></style>
