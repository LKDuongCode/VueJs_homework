<script setup lang="ts">
import { ref } from 'vue'
import { uploadFile } from '@/utils/uploadFile'

const files = ref<File[]>([])
const uploadStatuses = ref<{ name: string; status: string }[]>([])

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target && target.files) {
    files.value = Array.from(target.files)
  }
}

// Upload multiple files
const uploadFiles = async () => {
  if (!files.value.length) return

  uploadStatuses.value = []

  for (const file of files.value) {
    try {
      const url = await uploadFile(file, 'homeworks')
      uploadStatuses.value.push({ name: file.name, status: 'Success' })
      console.log('Uploaded: ', url)
    } catch (error) {
      uploadStatuses.value.push({ name: file.name, status: 'Failed' })
      console.error('Error uploading: ', file.name)
    }
  }
}
</script>

<template>
  <div class="upload-container">
    <input type="file" multiple @change="handleFileChange" />

    <button
      @click="uploadFiles"
      :disabled="!files.length"
      class="upload-button"
    >
      Upload Files
    </button>
    <ul v-if="uploadStatuses.length">
      <li v-for="(file, index) in uploadStatuses" :key="index">
        {{ file.name }} - {{ file.status }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.upload-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.upload-button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.upload-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
