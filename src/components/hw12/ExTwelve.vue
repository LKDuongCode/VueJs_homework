<script setup lang="ts">
import { computed, reactive, type ComputedRef } from 'vue'

type Task = {
  id: number
  name: string
  status: boolean
}

// mảng chứa task
const tasks = reactive<Task[]>([])

//thêm mới
const createNewTask = reactive<Task>({
  id: Math.floor(Math.random() * 9999),
  name: '',
  status: false
})

const handleAddTask = () => {
  if (createNewTask.name !== '') {
    // cần clone lại nếu không sẽ tham chiếu đến biến gốc
    tasks.push({ ...createNewTask })
    createNewTask.id = Math.floor(Math.random() * 9999)
    createNewTask.name = ''
    createNewTask.status = false
  }
}

//xóa
const handleDelete = (id: number) => {
  const index: number = tasks.findIndex((task: Task) => task.id === id)
  if (index !== -1) {
    tasks.splice(index, 1) // xóa phần tử ở vị trí index
  }
}

//lọc các task đã hoàn thiện
const completedTask = computed<Task[]>(() => {
  const completed = tasks.filter((task: Task) => task.status)
  return completed
})
</script>

<template>
  <h3 style="font-family: monospace; color: burlywood; font-size: xx-large">Todo List</h3>
  <main class="container">
    <div class="addContainer">
      <input
        type="text"
        class="addInput"
        @keyup.enter="handleAddTask"
        placeholder="Add a new task..."
        v-model="createNewTask.name"
      />
      <button class="addBtn" @click="handleAddTask">Add task</button>
    </div>
    <div class="render-ctn" v-if="tasks.length > 0">
      <div class="render-item" v-for="(task, index) in tasks" :key="index">
        <div class="checkItem">
          <input type="checkbox" :checked="task.status" v-model="task.status" />
          <p v-if="!task.status">{{ task.name }}</p>
          <s v-if="task.status">{{ task.name }}</s>
        </div>
        <button class="deleteCpn" @click="handleDelete(task.id)">Delete</button>
      </div>
    </div>
    <div style="text-align: center" v-if="tasks.length === 0">There are no tasks to do yet...</div>
    <div class="footer">
      <span>There are </span>
      <span class="completedTask">{{ completedTask.length }} / {{ tasks.length }} {{ '   ' }}</span>
      <span>task completed</span>
    </div>
  </main>
</template>

<style scoped>
.container {
  width: 600px;
  min-height: 100px;
  border-width: 2px;
  border: solid;
  border-color: burlywood;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.addContainer {
  display: flex;
}

/* func------------------------------------- */
.addInput {
  width: 88%;
  height: 32px;
  border-width: 2px;
  border: solid;
  border-color: #555;
  outline: none;
  padding: 4px;
  font-family: monospace;

  background-color: #333;
  color: #eee;
}

.addBtn {
  border: none;
  background-color: #555;
  color: #eee;
  font-family: monospace;
  font-weight: 600;
  text-wrap: nowrap;
}

/* render-------------------------------- */
.checkItem {
  display: flex;
  gap: 10px;
}

.render-item {
  display: flex;
  justify-content: space-between;
}

.render-ctn {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto;
}

.deleteCpn {
  background-color: tomato;
  color: #eee;
  border: none;
}

/* footer----------------------------------- */
.footer {
  background-color: #333;
  padding: 10px;
  font-family: monospace;
  color: #eee;
}

.completedTask {
  font-weight: 600;
}
</style>
