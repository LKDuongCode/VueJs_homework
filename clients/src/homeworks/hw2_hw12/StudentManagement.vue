<script setup lang="ts">
import type { EditStudent, Student } from '@/interfaces/StudentType'
import { studentsInstance } from '@/utils/instance'
import { onMounted, reactive, ref } from 'vue'
import AddModalComponent from './components/AddModalComponent.vue'
import DeleteModalComponent from './components/DeleteModalComponent.vue'
import EditModalComponent from './components/EditModalComponent.vue'

// hw2+hw7 get all and render------------------------------------------
const students = reactive<Student[]>([])
const getAllStudentAPI = async () => {
  try {
    const res = await studentsInstance.get('/')
    students.push(...res.data)
  } catch (err) {
    alert(err)
  }
}

onMounted(() => getAllStudentAPI())

//hw3 get by id----------------------------------------------
const studentIsGot = reactive({})
const getStudentByIdAPI = async (id: number) => {
  try {
    const res = await studentsInstance.get(`/${id}`)
    Object.assign(studentIsGot, res.data)
  } catch (err) {
    alert(err)
  }
}

//hw4+hw8 delete by id------------------------------------------
const isDeleteModalVisible = ref<boolean>(false)
const studentIsDeleted = ref<Student>()
const modalDeleteRef = ref(null)

//mở form và truyền vào con
const openDeleteModal = (student: Student) => {
  isDeleteModalVisible.value = true
  studentIsDeleted.value = student
}
const closeDeleteModal = () => (isDeleteModalVisible.value = false)

//hàm nhận xác nhận từ con
const deleteStudentByIdAPI = async (student: Student) => {
  try {
    const res = await studentsInstance.delete(`${student.id}`)
    //cập nhật ui
    const index = students.findIndex((std) => std.id === student.id)
    if (index !== -1) {
      students.splice(index, 1)
    } else {
      console.log(`Product  not found.`)
    }

    //hành động sau khi xong
    if (res.status === 200) {
      console.log(`User with id ${student.id} deleted successfully`)
    }
  } catch (err) {
    alert(err)
  }
}

//hw5+hw9 add student------------------------------------------
const isAddModalVisible = ref<boolean>(false)
const modalAddRef = ref(null)
const openAddModal = () => (isAddModalVisible.value = true)
const closeAddModal = () => (isAddModalVisible.value = false)

const addAstudentAPI = async (studentNeedAdded: any) => {
  //cần phải để any không để edit student được vì thiếu mất id,
  try {
    const res = await studentsInstance.post('/', studentNeedAdded)
    //cập nhật ui, nếu không cập nhật trực tiếp thì đối tượng thêm không có id phải đợi load lại trang mới có id
    // API phản hồi với dữ liệu của sinh viên đã được thêm (bao gồm cả id)
    const addedStudent = res.data
    // Cập nhật UI với sinh viên vừa thêm (đã có id)
    students.push({ ...addedStudent })
  } catch (err) {
    alert(err)
  }
}

//hw6+hw10 update by id-------------------------------------------------------------
const isEditModalVisible = ref<boolean>(false)
const modalEditRef = ref(null)
const studentIsEdited = reactive<Student | object>({})

const openEditModal = (student: Student) => {
  Object.assign(studentIsEdited, student)
  isEditModalVisible.value = true
}
const closeEditModal = () => (isEditModalVisible.value = false)
const updateStudentByIdAPI = async (studentNeedUpdated: Student) => {
  try {
    await studentsInstance.patch(`/${studentNeedUpdated.id}`, studentNeedUpdated)
    const index = students.findIndex((std) => std.id === studentNeedUpdated.id)
    if (index !== -1) {
      students[index] = { ...studentNeedUpdated }
    }
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <div>
    <div class="setup-border mt-5 p-5 flex flex-col gap-5">
      <h3 class="text-teal-500 font-bold">Student Management</h3>
      <div class="flex justify-between items-center">
        <div>
          <button class="bg-blue-400 text-white" @click="openAddModal">Add a new student</button>
        </div>
        <div class="flex justify-between w-2/3 items-center">
          <div class="w-80">
            <input
              type="text"
              class="w-full rounded-md border border-stone-300 border-solid px-5 py-1 outline-none focus:border-blue-500 dark:border-stone-300 text-base font-medium"
              placeholder="Search..."
            />
          </div>

          <div class="flex items-center font-medium">
            <p class="mr-2 pl-2 text-white dark:text-white">Sort By</p>
            <select
              class="bg-indigo-400 pl-2 border-none outline-none font-medium text-base text-stone-100"
            >
              <option class="text-black bg-slate-100" value="default">Default</option>
              <option class="text-black bg-slate-100" value="upToDown">Name Up-Down</option>
              <option class="text-black bg-slate-100" value="downToUp">Name Down-Up</option>
            </select>
          </div>

          <div class="flex items-center font-medium border-2 border-solid border-stone-300 px-1">
            <select
              class="bg-transparent pl-2 border-none outline-none font-medium text-base text-stone-100"
            >
              <option class="text-black" value="5">5</option>
              <option class="text-black" value="10">10</option>
              <option class="text-black" value="20">20</option>
              <option class="text-black" value="50">50</option>
            </select>
            <p class="pl-2 text-white text-sm">Entries Per Page</p>
          </div>
        </div>
      </div>

      <!-- table -->
      <div class="overflow-x-auto">
        <table class="min-w-full border">
          <thead>
            <tr class="bg-[#666]">
              <th class="border-b px-4 py-2 text-left">#</th>
              <th class="border-b px-4 py-2 text-left">Student Name</th>
              <th class="border-b px-4 py-2 text-left">Email</th>
              <th class="border-b px-4 py-2 text-left">Address</th>
              <th class="border-b px-4 py-2 text-left">Phone</th>
              <th class="border-b px-4 py-2 text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in students" :key="student.id">
              <td class="border-b px-4 py-2">{{ index + 1 }}</td>
              <td class="border-b px-4 py-2">{{ student.s_name }}</td>
              <td class="border-b px-4 py-2">
                {{ student.s_email }}
              </td>
              <td class="border-b px-4 py-2">{{ student.s_address }}</td>
              <td class="border-b px-4 py-2">{{ student.s_phone }}</td>
              <td class="border-b px-4 py-2">
                <button class="bg-amber-400 text-white mr-3" @click="openEditModal(student)">
                  Edit
                </button>
                <button class="bg-red-400 text-white" @click="openDeleteModal(student)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- footer -->
      <div class="flex justify-between px-8 pt-5">
        <p class="font-medium text-gray-500">Showing 1 of 3 pages</p>
        <div class="flex">
          <button
            class="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-blue-400 hover:text-white border-transparent font-medium text-base"
          >
            <svg
              class="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                fill=""
              />
            </svg>
          </button>
          <button
            class="bg-blue-400 text-white mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-blue-400 hover:text-white border-transparent text-base font-medium"
          >
            1
          </button>
          <button
            class="false mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-blue-400 hover:text-white border-transparent text-base font-medium"
          >
            2
          </button>
          <button
            class="false mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-blue-400 hover:text-white border-transparent text-base font-medium"
          >
            3
          </button>
          <button
            class="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-blue-400 hover:text-white border-transparent text-base font-medium"
          >
            <svg
              class="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- modal -->
    <AddModalComponent
      ref="modalAddRef"
      v-if="isAddModalVisible"
      @close="closeAddModal"
      @add="addAstudentAPI"
    ></AddModalComponent>
    <DeleteModalComponent
      v-if="isDeleteModalVisible"
      ref="modalDeleteRef"
      @delete="deleteStudentByIdAPI"
      :student_deleted="studentIsDeleted"
      @close="closeDeleteModal"
    ></DeleteModalComponent>
    <EditModalComponent
      v-if="isEditModalVisible"
      ref="modalEditRef"
      @close="closeEditModal"
      :student_edited="studentIsEdited"
      @update="updateStudentByIdAPI"
    ></EditModalComponent>
  </div>
</template>

<style scoped></style>
