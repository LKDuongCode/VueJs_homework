<script setup>
//emit
const emit = defineEmits(['send'])

//phát sk
const handleClick = () => {
  emit('send', 'welcome to rikkei')
}
</script>

<template>
  <div>meschild--------------------------</div>
  <div>
    <button @click="handleClick">send message</button>
  </div>
</template>

<style scoped></style>
