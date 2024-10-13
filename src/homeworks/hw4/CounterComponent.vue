<script setup lang="ts">
import { commit, type StateType } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore<StateType>()
const count = computed(() => store.state.count)

//gọi mutation
const handleDecrease = () => {
  commit('decrement')
  //vì định nghĩa sắn trong store nên không cần gọi store.commit và đánh vần tên hàm
}
const handleIncrease = () => {
  commit('increment')
}
</script>

<template>
  <div>
    <div>Count :{{ count }}</div>
    <div>
      <button @click="handleIncrease">Increase</button> <br />
      <button @click="handleDecrease">Decrease</button>
    </div>
  </div>
</template>

<style scoped></style>
