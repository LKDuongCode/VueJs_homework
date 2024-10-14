<script setup lang="ts">
import { useStore } from "vuex";
import SubTotal from "./SubTotal.vue";
import type { RootState } from "@/store";
import { computed, onMounted } from "vue";
const store = useStore<RootState>();

// Gọi action để lấy dữ liệu sản phẩm khi component được mount
onMounted(() => {
  store.dispatch("carts/fetchCarts");
});

const carts = computed(() => store.state.carts.data);
</script>

<template>
  <div class="mx-auto p-6 border-2 border-green-400 rounded h-max">
    <!-- Title -->
    <div class="text-3xl font-bold text-center text-white mb-6">
      Shopping Cart
    </div>

    <!-- Product List -->
    <div class="grid grid-cols-1 gap-6">
      <!-- Product Item -->
      <div
        class="bg-gray-800 p-4 rounded border-2 border-blue-400 flex gap-2"
        v-for="(product, index) in carts"
        :key="index"
      >
        <div>
          <img
            :src="product.p_img"
            alt="Product Image"
            class="w-32 h-32 object-cover rounded"
          />
        </div>
        <div class="text-white max-w-52 flex flex-col gap-2">
          <h3 class="text-xl font-semibold truncate">{{ product.p_name }}</h3>
          <input
            type="number"
            min="1"
            readonly
            class="border-2 border-gray-600 rounded p-2 w-1/2 mr-2 text-[#333]"
          />
          <p class="text-sm font-bold">Quantity: {{ product.p_quantity }}</p>
        </div>
        <div
          class="flex flex-col gap-2 border-solid border-l border-blue-400 pl-3"
        >
          <span class="text-white font-bold"
            >${{ product.p_quantity * product.p_price }}</span
          >
          <button
            class="setup-border border-green-500 text-white rounded px-4 hover:bg-green-600 transition"
          >
            Edit
          </button>
          <button
            class="setup-border border-red-400 text-white rounded px-4 hover:bg-red-500 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
    <SubTotal></SubTotal>
  </div>
</template>

<style scoped></style>
