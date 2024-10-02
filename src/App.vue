<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-5">
    <!-- header -->
    <div class="flex justify-between">
      <h3 class="text-2xl font-bold text-[#6495ED]">Quản lí mượn trả sách</h3>
      <div>
        <button class="border-2 border-solid border-[#6495ED] bg-transparent text-[#6495ED] py-1">
          Thêm thông tin
        </button>
      </div>
    </div>
    <!-- body -->
    <div>
      <table>
        <thead>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <th>STT</th>
            <th>Tên sách</th>
            <th>Người mượn</th>
            <th>Ngày mượn</th>
            <th>Ngày trả</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
          <tr class="border-solid border-2 border-stone-500 text-nowrap">
            <td class="px-10">1</td>
            <td class="px-10">Tư duy tích cực tạo thành công</td>
            <td class="px-10">Lê Khánh Dương</td>
            <td class="px-10">11/11/2024</td>
            <td class="px-10">12/12/2024</td>
            <td class="px-10">
              <select
                value="notReturned"
                class="border-green-400 border-2 border-solid bg-[#181818] text-green-400 text-sm px-1 outline-none"
              >
                <option value="returned">Đã trả</option>
                <option value="notReturned">Chưa trả</option>
              </select>
            </td>
            <td class="px-10 flex gap-3">
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-amber-400"
              >
                Sửa
              </button>
              <button
                class="my-1 hover:text-[#333] text-[#eee] bg-transparent border-solid border-2 border-red-400"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
