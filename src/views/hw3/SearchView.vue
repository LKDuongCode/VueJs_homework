<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const searchValue = ref<string>('')
//truyền lên ulr
const router = useRouter()
const handleSearch = () => router.push({ query: { q: searchValue.value } })
// lấy từ url
const route = useRoute()
const value = computed(() => route.query.q)
</script>

<template>
  <div>
    <h5>SearchView</h5>
    <div>
      <input type="text" v-model="searchValue" />
      <button @click="handleSearch">search</button>
    </div>
    <div>value = {{ value }}</div>
  </div>
</template>

<style scoped></style>
