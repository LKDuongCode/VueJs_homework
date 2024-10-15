<!-- 
npm install pdfjs-dist
 
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { uploadFile } from '@/utils/uploadFile'
import { storage } from '@/firebase/config'
import { ref as storageRef, getDownloadURL } from 'firebase/storage'
import * as pdfjsLib from 'pdfjs-dist'

// Biến để lưu file PDF đã chọn
const pdfFile = ref<File | null>(null)
// Biến để lưu đường dẫn download của file
const pdfURL = ref<string | null>(null)
// Biến để lưu canvas render PDF
const pdfCanvas = ref<HTMLCanvasElement | null>(null)

// Hàm xử lý khi chọn file PDF
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files) {
    pdfFile.value = target.files[0]
  }
}

// Hàm upload file PDF lên Firebase
const uploadPDF = async () => {
  if (!pdfFile.value) return

  try {
    pdfURL.value = await uploadFile(pdfFile.value, 'homeworks')
    alert('Upload PDF thành công!')
    renderPDF(pdfURL.value!)
  } catch (error) {
    alert('Upload PDF thất bại!')
  }
}

// Hàm render PDF ra ngoài giao diện sử dụng pdf.js
const renderPDF = async (pdfUrl: string) => {
  if (!pdfCanvas.value) return

  const loadingTask = pdfjsLib.getDocument(pdfUrl)
  const pdf = await loadingTask.promise
  const page = await pdf.getPage(1) // Render trang đầu tiên

  const canvasContext = pdfCanvas.value.getContext('2d')!
  const viewport = page.getViewport({ scale: 1.5 })

  pdfCanvas.value.width = viewport.width
  pdfCanvas.value.height = viewport.height

  const renderContext = {
    canvasContext,
    viewport,
  }

  await page.render(renderContext).promise
}

onMounted(() => {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
})
</script>

<template>
  <div class="pdf-upload-container">
    <input type="file" @change="handleFileChange" accept="application/pdf" />
    <button @click="uploadPDF" class="bg-blue-400">Upload PDF</button>

    <div v-if="pdfURL">
      <h3>PDF Preview:</h3>
    </div>
  </div>
</template>

<style scoped>
.pdf-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
canvas {
  border: 1px solid #000;
}
</style>
