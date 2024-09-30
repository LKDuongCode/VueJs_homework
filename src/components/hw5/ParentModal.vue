<script setup>
import { ref } from 'vue'
import NotificationModal from './NotificationModal.vue'
//biến kiểm soát trạng thái
const status = ref(true)
</script>

<template>
  <div v-if="status">
    <NotificationModal>
      <template #header>
        <div style="font-weight: 600; font-size: x-large">System notification</div>
      </template>
      <template #content>
        <div>This is model's content. You can close modal by click Close button.</div>
      </template>
      <template #buttonFooter>
        <div style="display: flex; justify-content: end">
          <button style="font-family: monospace" @click="() => (status = false)">close</button>
        </div>
      </template>
    </NotificationModal>
  </div>
</template>

<style scoped></style>
