<script setup>
import { ref } from 'vue'

//mảng giới tính
const genders = ref(['male', 'female', 'other'])
const genderDefault = ref(genders.value[0])
const randomCount = ref(0)
// hàm đảo
const handleRamdomGenders = (arr) => {
  const index = Math.floor(Math.random() * arr.length)
  genderDefault.value = arr[index]
  randomCount.value++
}
</script>

<template>
  <div>
    <div>
      Gender : <span style="font-weight: 600; font-size: 20px">{{ genderDefault }}</span>
    </div>
    <div>
      Count : <span>{{ randomCount }}</span>
    </div>
    <div><button @click="handleRamdomGenders(genders)">random gender</button></div>
  </div>
</template>

<style scoped></style>
