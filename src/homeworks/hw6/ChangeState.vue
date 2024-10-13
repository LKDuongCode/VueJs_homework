<script setup lang="ts">
import { commit, type StateType } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

// lấy data
const store = useStore<StateType>()
const company = computed(() => store.state.company)

const changeState = () => {
  commit('changeState')
}
</script>

<template>
  <div>
    <h3>{{ company }}</h3>
    <button @click="changeState">Change state</button>
  </div>
</template>

<style scoped></style>
