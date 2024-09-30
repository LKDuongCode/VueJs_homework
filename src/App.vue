<script setup>
import { reactive } from 'vue'

// mảng chứa task
const tasks = reactive([
  {
    id: 1,
    name: 'do laundry',
    status: false
  }
])

//thêm mới
const createNewTask = reactive({
  id: Math.floor(Math.random() * 9999),
  name: '',
  status: false
})

// const handleAdd = ()=>{

// }
</script>

<template>
  <main class="container">
    <div class="addContainer">
      <input
        type="text"
        class="addInput"
        placeholder="Add a new task..."
        v-model="createNewTask.name"
      />
      <button class="addBtn">Add task</button>
    </div>
    <div class="render-ctn">
      <div class="render-item" v-for="(task, index) in tasks" :key="index">
        <div class="checkItem">
          <input type="checkbox" :checked="task.status" />
          <p>{{ task.name }}</p>
        </div>
        <button class="deleteCpn">Delete</button>
      </div>
    </div>
    <div class="footer">
      <span>There are </span>
      <span class="completedTask">5/10 </span>
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
