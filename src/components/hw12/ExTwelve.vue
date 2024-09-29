<script setup>
import { ref, watch } from 'vue'

const isShow = ref(false)

//sau 5s tự ẩn
watch(isShow, () => {
  setTimeout(() => (isShow.value = false), 5000)
})
</script>

<template>
  <div>
    <button @click="() => (isShow = !isShow)">show notification</button>

    <div class="notific" v-show="isShow">
      <span>You have a new message!</span> {{ '        ' }}
      <span @click="() => (isShow = false)">X</span>
    </div>
  </div>
</template>

<style scoped>
.notific {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: cornflowerblue;
  padding: 10px;
}
</style>
