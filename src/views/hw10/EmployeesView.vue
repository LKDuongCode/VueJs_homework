<script setup lang="ts">
import { employees } from './data'
</script>

<template>
  <div>
    <h3>EmployeesView</h3>
    <div class="grid grid-cols-2 gap-5">
      <div
        v-for="employee in employees"
        :key="employee.id"
        class="border-2 border-white border-solid p-5"
      >
        <p>id : {{ employee.id }}</p>
        <p>name : {{ employee.name }}</p>
        <div class="flex gap-3">
          <button class="px-5 bg-slate-400">salary</button>
          <button class="px-5 bg-slate-400">position</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
