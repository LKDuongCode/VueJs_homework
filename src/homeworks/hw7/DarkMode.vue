<script setup lang="ts">
import { commit, type StateType } from '@/store'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore<StateType>()
const mode = computed(() => store.state.mode)

const changeMode = (value: 'light' | 'dark') => {
  commit('changeMode', value)
}
</script>

<template>
  <div :class="mode === 'dark' ? 'background-dark' : 'background-light'" class="normal">
    <input
      type="checkbox"
      :checked="mode === 'dark'"
      @change="changeMode(mode === 'dark' ? 'light' : 'dark')"
    />
    = {{ mode }}
  </div>
</template>

<style scoped>
.normal {
  width: max-content;
  padding: 20px;
}

.background-dark {
  background-color: #444;
  color: white;
}

.background-light {
  background-color: white;
  color: black;
}
</style>
