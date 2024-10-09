<script setup lang="ts">
//tạo emit
const emit = defineEmits(['close', 'delete'])
//phát sự kiện
const closeDeleteForm = () => {
  emit('close', false)
}
const confirmDelete = (id: number) => {
  emit('delete', id)
}

//nhận props
const props = defineProps(['id_delete'])
</script>

<template>
  <div class="bg-[#eee] text-[#333] w-96 p-5 rounded">
    <h3 class="text-left text-red-400">Delete warming</h3>
    <p>
      Are you sure you want to delete product id =
      <span class="text-red-500">"{{ props.id_delete }}"</span>?
    </p>
    <hr class="border-[#999] border-solid my-4" />

    <div class="flex gap-5 justify-end">
      <button
        class="rounded text-sm font-semibold py-1 text-white bg-[#777]"
        @click="closeDeleteForm"
      >
        Cancel
      </button>
      <button
        class="rounded text-sm font-semibold py-1 text-white bg-red-400"
        @click="confirmDelete(props.id_delete)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<style scoped></style>
