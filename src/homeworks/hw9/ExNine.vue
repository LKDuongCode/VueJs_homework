<script setup>
import { reactive } from 'vue'

//danh sách bài viết
const posts = reactive([
  {
    id: 1,
    title: 'the boys movies',
    content: 'homelander is fighting with his son',
    author: 'unknow'
  },
  {
    id: 2,
    title: 'how to using vue 3',
    content: 'homelander is fighting with his son',
    author: 'unknow'
  },
  {
    id: 3,
    title: 'Is Arena of valor kotex? ',
    content: 'homelander is fighting with his son',
    author: 'unknow'
  }
])
</script>

<template>
  <div>
    <h2>Danh sách bài viết</h2>
    <div v-for="post in posts" :key="post.id">
      <p>ID :{{ post.id }}</p>
      <p>Title :{{ post.title }}</p>
      <p>Content :{{ post.content }}</p>
      <p>Author :{{ post.author }}</p>
      <hr />
    </div>
  </div>
</template>

<style scoped></style>
