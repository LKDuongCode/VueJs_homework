<script setup lang="ts">
import ProfileComponent from './homeworks/hw1/ProfileComponent.vue'
import ListUser from './homeworks/hw2/ListUser.vue'
import ListProduct from './homeworks/hw3/ListProduct.vue'
import CounterComponent from './homeworks/hw4/CounterComponent.vue'
import RandomNumber from './homeworks/hw5/RandomNumber.vue'
import ChangeState from './homeworks/hw6/ChangeState.vue'
import DarkMode from './homeworks/hw7/DarkMode.vue'
import ChangeLanguages from './homeworks/hw8/ChangeLanguages.vue'
import LoginComponent from './homeworks/hw9_hw10/LoginComponent.vue'
import RegisterComponent from './homeworks/hw9_hw10/RegisterComponent.vue'
</script>

<template>
  <div>
    <ProfileComponent></ProfileComponent>
    <hr />
    <ListUser></ListUser>
    <hr />
    <ListProduct></ListProduct>
    <hr />
    <CounterComponent></CounterComponent>
    <hr />
    <RandomNumber></RandomNumber>
    <hr />
    <ChangeState></ChangeState>
    <hr />
    <DarkMode></DarkMode>
    <hr />
    <ChangeLanguages></ChangeLanguages>
    <hr />
    <div style="display: flex; gap: 20px">
      <RegisterComponent></RegisterComponent>
      <LoginComponent></LoginComponent>
    </div>
  </div>
</template>

<style scoped></style>
