<script setup lang="ts">
import { ref } from 'vue'

const hobbies = ref<string[]>([])
</script>

<template>
  <div>
    <h3>what are your hobbies = {{ hobbies }}</h3>
    <div>
      <input type="checkbox" value="football" v-model="hobbies" /> <span>playing football</span>
    </div>
    <div><input type="checkbox" value="game" v-model="hobbies" /> <span>playing game</span></div>
    <div>
      <input type="checkbox" value="goOut" v-model="hobbies" /> <span>go out with friends</span>
    </div>
    <div><input type="checkbox" value="drawing" v-model="hobbies" /> <span>drawing</span></div>
  </div>
</template>

<style scoped></style>
