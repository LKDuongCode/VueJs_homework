<script setup lang="ts">
import { commit, type StateType } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore<StateType>()
const languages = computed(() => store.state.languages)

const ChangeLanguages = (lang: 'Vietnamese' | 'English') => {
  commit('changeLanguages', lang)
}
</script>

<template>
  <div
    style="
      width: 400px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      background-color: cornflowerblue;
      color: white;
    "
  >
    <div style="display: flex; gap: 30px">
      <h2>{{ languages === 'Vietnamese' ? 'Chuyển đổi ngôn ngữ' : 'Languages translation' }}</h2>
      <button @click="ChangeLanguages(languages === 'Vietnamese' ? 'English' : 'Vietnamese')">
        trans
      </button>
    </div>
    <div>
      {{
        languages === 'Vietnamese'
          ? 'Chào mừng bạn đến với demo chuyển đổi ngôn ngữ'
          : 'Welcome to languages translation demo'
      }}
    </div>
  </div>
</template>

<style scoped></style>
