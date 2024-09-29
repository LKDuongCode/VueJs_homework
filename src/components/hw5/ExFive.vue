<script setup>
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//lọc số chẵn
const filterNums = (arr) => arr.filter((num) => num % 2 === 0)

const numsFiltered = filterNums(nums)
</script>

<template>
  <div>
    <div>Khi array = {{ nums }} thì kết quả in ra là:</div>
    <br /><br />
    <div>
      <h3>Các số chẵn từ mảng :</h3>
      <p>{{ numsFiltered }}</p>
    </div>
  </div>
</template>

<style scoped></style>
