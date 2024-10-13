<script setup lang="ts">
import type { StateType } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore<StateType>()
//lấy data
const profile = computed(() => store.state.profile)
</script>

<template>
  <div>
    <h3>Personal information</h3>
    <p>Id:{{ profile.id }}</p>
    <p>Name:{{ profile.name }}</p>
    <p>Gender:{{ profile.gender }}</p>
    <p>DateOfBirt:{{ profile.dob }}</p>
    <p>Address:{{ profile.address }}</p>
  </div>
</template>

<style scoped></style>
