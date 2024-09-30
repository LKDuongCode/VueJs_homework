<script setup>
import ChildCard from './ChildCard.vue'
</script>

<template>
  <div>
    <ChildCard>
      <template #header>
        <div style="font-weight: 600; font-size: x-large">Product Infomations</div>
      </template>
      <template #content>
        <div>This is short product's decrible. This product have many good feature and deal.</div>
      </template>
      <template #buttonFooter>
        <div style="display: flex; justify-content: start">
          <button style="font-family: monospace; background-color: cornflowerblue">detail</button>
        </div>
      </template>
    </ChildCard>
  </div>
</template>

<style scoped></style>
