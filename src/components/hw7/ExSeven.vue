<script setup>
import { reactive } from 'vue'

const buttons = reactive([
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false }
])

const handleClick = (id) => {
  //cho false hết
  buttons.forEach((button) => (button.active = false))
  // set lại một nút
  const index = buttons.findIndex((button) => button.id === id)
  if (index !== -1) buttons[index].active = true
}
</script>

<template>
  <div class="flex">
    <button
      v-for="button in buttons"
      :key="button.id"
      @click="handleClick(button.id)"
      :style="button.active ? 'background-color:red' : ''"
    >
      button {{ button.id }}
    </button>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 20px;
}
</style>
