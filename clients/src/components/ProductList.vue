<script setup lang="ts">
import type { Product } from "@/interfaces/ProductType";
import type { RootState } from "@/store";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore<RootState>();

// Gọi action để lấy dữ liệu sản phẩm khi component được mount
onMounted(() => {
  store.dispatch("products/fetchProducts");
});

// Sử dụng computed để lấy danh sách sản phẩm từ store
const products = computed(() => {
  return store.state.products.data.map((product) => ({
    ...product,
    quantity: 1, // Khởi tạo thuộc tính quantity cho mỗi sản phẩm
  }));
});

// Thêm sản phẩm vào giỏ hàng
const addToCart = (product: Product, quantity: number) => {
  // Kiểm tra nếu số lượng lớn hơn số lượng có sẵn
  if (quantity > product.p_quantity) {
    alert("Không đủ sản phẩm trong kho!");
    return;
  }
  store.dispatch("products/addProduct", { product, quantity });
};
</script>

<template>
  <div class="mx-auto p-6 border-2 border-green-400 rounded h-max">
    <!-- Title -->
    <div class="text-3xl font-bold text-center text-white mb-6">
      Product List
    </div>

    <!-- Product List -->
    <div class="flex flex-col max-h-[500px] overflow-y-scroll gap-6">
      <!-- Product Item -->
      <div
        class="bg-gray-800 p-4 rounded border-2 border-blue-400 flex gap-2"
        v-for="(product, index) in products"
        :key="index"
      >
        <div>
          <img
            :src="product.p_img"
            alt="Product Image"
            class="w-32 h-32 object-cover rounded"
          />
        </div>
        <div class="text-white w-52 flex flex-col gap-2">
          <h3 class="text-xl font-semibold truncate">{{ product.p_name }}</h3>
          <p class="text-sm max-h-16">
            {{ product.p_description }}
          </p>
          <p class="text-sm font-bold">
            Stock Quantity: {{ product.p_quantity }}
          </p>
        </div>
        <div
          class="flex flex-col gap-2 border-solid border-l border-blue-400 pl-3"
        >
          <input
            type="number"
            min="1"
            v-model.number="product.quantity"
            class="border-2 border-gray-600 rounded p-2 w-full mr-2 text-[#333]"
          />
          <span class="text-white font-bold">
            Price: ${{ product.p_price }}
          </span>
          <button
            v-if="product.p_quantity !== 0"
            @click="addToCart(product, product.quantity)"
            class="setup-border border-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition"
          >
            Add to Cart
          </button>
          <button
            v-if="product.p_quantity === 0"
            disabled
            class="text-amber-400 px-4 py-2 bg-transparent"
          >
            Sold Out!
          </button>
        </div>
      </div>

      <!-- Thêm nhiều sản phẩm nếu cần -->
    </div>
  </div>
</template>

<style scoped>
/* Thêm các kiểu CSS nếu cần */
</style>
