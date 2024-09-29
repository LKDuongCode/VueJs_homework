<script setup>
import { reactive } from 'vue'

// tạo đối tượng mặc định
let company = reactive({
  name: 'Rikkei Academy',
  age: 2
})

// hàm gán giá trị
const handleClick = () => {
  const cloneCompany = {
    name: 'Rikkei Education',
    age: 1
  }
  company.name = cloneCompany.name
  company.age = cloneCompany.age

  //không như state, reactive không thể cập nhật toàn bộ đối tượng
  // thay vào đó dùng Object.assign() để sao chép tất cả các thuộc tính từ đối tượng mới vào đối tượng hiện tại mà không thay thế toàn bộ đối tượng.

  //   Object.assign(company, cloneCompany)
}
</script>

<template>
  <div>
    <p>Company : {{ company.name }}</p>
    <p>Age : {{ company.age }}</p>
    <br />
    <button @click="handleClick">change data</button>
  </div>
</template>

<style scoped></style>
