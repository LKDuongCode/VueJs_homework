<script setup>
//props
const props = defineProps(['type'])

//emit
const emit = defineEmits(['on-click'])
const handleClick = () => {
  emit('on-click', props.type)
}
</script>

<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped></style>
