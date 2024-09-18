<script setup>
// thực hiện 4 hàm cộng trừ nhân chia
const calculate = (fValue, lValue, command) => {
  switch (command) {
    case "sum":
      return fValue + lValue;

    case "minus":
      return fValue - lValue;
    case "multiple":
      return fValue * lValue;
    case "devide":
      return fValue / lValue;
    default:
      return 0;
  }
};
</script>

<template>
  <div class="m-5">
    <h1 class="text-xl font-bold">Danh sách kết quả</h1>
    <ul>
      <li class="list-disc">10 + 10 = {{ calculate(10, 10, "sum") }}</li>
      <li class="list-disc">10 - 10 = {{ calculate(10, 10, "minus") }}</li>
      <li class="list-disc">10 * 10 = {{ calculate(10, 10, "multiple") }}</li>
      <li class="list-disc">10 / 10 = {{ calculate(10, 10, "devide") }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
