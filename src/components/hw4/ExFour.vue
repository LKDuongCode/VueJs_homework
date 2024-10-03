<script setup lang="ts">
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' }
]
</script>

<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Activator slot </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style scoped></style>
