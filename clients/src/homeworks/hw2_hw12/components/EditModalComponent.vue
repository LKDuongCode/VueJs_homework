<script setup lang="ts">
import type { Student } from '@/interfaces/StudentType'
import { validateEmail, validatePhoneNumber } from '@/utils/validate'
import { onMounted, reactive } from 'vue'

//truyền event đến cha
const emit = defineEmits(['close', 'update'])
const closeEditModal = () => emit('close')

//nhận từ cha
const props = defineProps(['student_edited'])

//tạo khuôn
const editStudent = reactive<Student>({
  id: 0,
  s_address: '',
  s_created_at: '',
  s_email: '',
  s_name: '',
  s_phone: '',
  s_status: true
})
onMounted(() => {
  editStudent.id = props.student_edited.id
  editStudent.s_address = props.student_edited.s_address
  editStudent.s_created_at = props.student_edited.s_created_at
  editStudent.s_email = props.student_edited.s_email
  editStudent.s_name = props.student_edited.s_name
  editStudent.s_phone = props.student_edited.s_phone
  editStudent.s_status = props.student_edited.s_status
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

const handleUpdateStudent = (student: Student) => {
  if (
    ['s_address', 's_email', 's_phone', 's_name'].some((field) => (student as any)[field] === '')
  ) {
    validate.empty = true
    return
  }
  if (!validateEmail(student.s_email)) {
    validate.wrEmail = true
    return
  }
  if (!validatePhoneNumber(student.s_phone)) {
    validate.wrPhone = true
    return
  }
  emit('update', student)
  closeEditModal()
}
</script>

<template>
  <teleport to="body">
    <div class="fixed top-0 left-0 flex justify-center items-center bg-[#00000080] w-full h-full">
      <div class="bg-[#EEEEEE] text-[#333] w-96 p-5 rounded">
        <h3 class="text-center text-blue-400">Edit student</h3>
        <hr />
        <div class="flex flex-col gap-4 mt-3">
          <div>
            <p class="font-semibold">Name</p>
            <input
              type="text"
              class="w-full mt-1 px-3 py-1 rounded"
              v-model="editStudent.s_name"
              @click="handleFocus"
            />
          </div>
          <div>
            <p class="font-semibold">Email</p>
            <input
              type="text"
              class="w-full mt-1 px-3 py-1 rounded"
              v-model="editStudent.s_email"
              @click="handleFocus"
            />
          </div>
          <div>
            <p class="font-semibold">Address</p>
            <input
              type="text"
              class="w-full mt-1 px-3 py-1 rounded"
              v-model="editStudent.s_address"
              @click="handleFocus"
            />
          </div>
          <div>
            <p class="font-semibold">Phone</p>
            <input
              type="text"
              class="w-full mt-1 px-3 py-1 rounded"
              v-model="editStudent.s_phone"
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
              @click="closeEditModal"
            >
              Cancel
            </button>
            <button
              class="rounded text-sm font-semibold py-1 text-white bg-green-400"
              @click="handleUpdateStudent(editStudent)"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped></style>
