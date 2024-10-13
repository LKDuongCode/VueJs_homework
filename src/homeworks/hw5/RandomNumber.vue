<script setup lang="ts">
import { commit, type StateType } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore<StateType>()
const nums = computed(() => store.state.nums)

//gọi vuex
const handleGenerate = () => {
  commit('generateRandomNumber')
}
</script>

<template>
  <div>
    <p>{{ nums }}</p>
    <button @click="handleGenerate">Generate random number</button>
  </div>
</template>

<style scoped></style>
