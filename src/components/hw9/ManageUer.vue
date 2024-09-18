<script setup></script>

<template>
  <div>
    <table class="table-auto border-collapse w-full">
      <thead>
        <tr class="bg-gray-200">
          <th class="border-b">STT</th>
          <th class="border-b">Fullname</th>
          <th class="border-b">Date of birth</th>
          <th class="border-b">Sex</th>
          <th class="border-b">Address</th>
          <th class="border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b">
          <td class="text-center">1</td>
          <td class="text-center">John Doe</td>
          <td class="text-center">01/01/1990</td>
          <td class="text-center">Male</td>
          <td class="text-center">Hà Nội</td>
          <td class="text-center">
            <button
              class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Sửa
            </button>
            <button
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 ml-2"
            >
              Xóa
            </button>
          </td>
        </tr>
        <tr class="bg-gray-50 border-b">
          <td class="text-center">2</td>
          <td class="text-center">Jane Smith</td>
          <td class="text-center">12/12/1992</td>
          <td class="text-center">Female</td>
          <td class="text-center">Đà Nẵng</td>
          <td class="text-center">
            <button
              class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Sửa
            </button>
            <button
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 ml-2"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
