<script setup lang="ts">
import type { EditStudent } from '@/interfaces/StudentType'
import { getCurrentDateFormatted } from '@/utils/formatDate'
import { validateEmail, validatePhoneNumber } from '@/utils/validate'
import { reactive } from 'vue'
//truyền sự kiện đến cha
const emit = defineEmits(['close', 'add'])
const closeAddModal = () => emit('close')

//tạo đối tượng để thêm
const newStudent = reactive<EditStudent>({
  s_address: '',
  s_created_at: getCurrentDateFormatted(),
  s_email: '',
  s_name: '',
  s_phone: '',
  s_status: true
})

//validate
const validate = reactive({
  empty: false,
  wrEmail: false,
  wrPhone: false
})

// ẩn thông báo khi foccus
const handleFocus = () => {
  validate.empty = false
  validate.wrEmail = false
  validate.wrPhone = false
}

//nút thêm mới
const hanldeAddStudent = (studentNeedAdded: EditStudent) => {
  if (
    ['s_address', 's_email', 's_phone', 's_name'].some(
      (field) => (studentNeedAdded as any)[field] === ''
    )
  ) {
    validate.empty = true
    return
  }
  if (!validateEmail(studentNeedAdded.s_email)) {
    validate.wrEmail = true
    return
  }
  if (!validatePhoneNumber(studentNeedAdded.s_phone)) {
    validate.wrPhone = true
    return
  }
  emit('add', studentNeedAdded)
  closeAddModal()
}
</script>

<template>
  <teleport to="body">
    <div class="fixed top-0 left-0 flex justify-center items-center bg-[#00000080] w-full h-full">
      <div class="bg-[#EEEEEE] text-[#333] w-96 p-5 rounded">
        <h3 class="text-center text-blue-400">Add a new student</h3>
        <hr />
        <div class="flex flex-col gap-4 mt-3">
          <div>
            <p class="font-semibold">Name</p>
            <input
              type="text"
              class="w-full mt-1 px-3 py-1 rounded"
              v-model="newStudent.s_name"
              @click="handleFocus"
            />
          </div>
          <div>
            <p class="font-semibold">Email</p>
            <input
              type="text"
              class="w-full mt-1 px-3 py-1 rounded"
              v-model="newStudent.s_email"
              @click="handleFocus"
            />
          </div>
          <div>
            <p class="font-semibold">Address</p>
            <input
              type="text"
              class="w-full mt-1 px-3 py-1 rounded"
              v-model="newStudent.s_address"
              @click="handleFocus"
            />
          </div>
          <div>
            <p class="font-semibold">Phone</p>
            <input
              type="text"
              class="w-full mt-1 px-3 py-1 rounded"
              v-model="newStudent.s_phone"
              @click="handleFocus"
            />
          </div>
          <!-- validate -->
          <div>
            <p v-show="validate.empty" class="text-red-500 bg-red-100 px-3 text-sm font-medium">
              Data fields cannot be left blank!
            </p>
            <p v-show="validate.wrEmail" class="text-red-500 bg-red-100 px-3 text-sm font-medium">
              Email format is incorrect.
            </p>
            <p v-show="validate.wrPhone" class="text-red-500 bg-red-100 px-3 text-sm font-medium">
              Incorrect phone number format!
            </p>
          </div>
          <div class="flex gap-5 justify-end">
            <button
              class="rounded text-sm font-semibold py-1 text-white bg-[#888]"
              @click="closeAddModal"
            >
              Cancel
            </button>
            <button
              class="rounded text-sm font-semibold py-1 text-white bg-blue-400"
              @click="hanldeAddStudent(newStudent)"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
