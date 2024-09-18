<script setup>
const user = {
  fullname: "Nguyễn Văn A",
  sex: "Nam",
  dob: "17/12/2000",
  address: "Hà Nội",
  email: "nva@gmail.com",
};
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Thông tin cá nhân</h1>
    <ul>
      <li class="flex gap-5">
        Họ và tên:
        <p class="font-semibold">{{ user.fullname }}</p>
      </li>
      <li class="flex gap-5">
        Giới tính:
        <p class="font-semibold">{{ user.sex }}</p>
      </li>
      <li class="flex gap-5">
        Ngày sinh:
        <p class="font-semibold">{{ user.dob }}</p>
      </li>
      <li class="flex gap-5">
        Địa chỉ:
        <p class="font-semibold">{{ user.address }}</p>
      </li>
      <li class="flex gap-5">
        Email:
        <p class="font-semibold">{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
