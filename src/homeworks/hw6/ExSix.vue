<script setup>
import { computed, ref } from 'vue'

//lấy giá trị từ input
const inputValue = ref(0)
//tổng tiền
const totalMoney = ref(0)

const calculateTotal = computed(() => totalMoney.value + inputValue.value)

const handleTotal = () => {
  totalMoney.value = calculateTotal.value
  inputValue.value = 0
}
</script>

<template>
  <div>
    <div>
      <input type="number" v-model="inputValue" />
      <button @click="handleTotal">Add to cart</button>
    </div>
    <div>Total : {{ totalMoney }}</div>
  </div>
</template>

<style scoped></style>
