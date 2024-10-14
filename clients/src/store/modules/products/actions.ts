import type { ActionContext } from "vuex";

import type { RootState } from "@/store";
import { getAllProduct } from "@/API/products/getAll";
import type { Product, ProductState } from "@/interfaces/ProductType";
import { addToCart } from "@/API/products/addToCart";

export const actions = {
  async fetchProducts({ commit }: ActionContext<ProductState, RootState>) {
    //bật trạng thái tải dữ liệu trước khi gọi api
    commit("setLoading", true);
    try {
      const products = await getAllProduct();
      commit("setProducts", products);
    } catch (error) {
      commit("setErr", error);
    } finally {
      commit("setLoading", false); //tắt trạng thái sau khi gọi api hoàn tất
    }
  },

  // thêm vào carts
  async addProduct(
    { commit }: ActionContext<ProductState, RootState>,
    { product, quantity }: { product: Product; quantity: number } // Nhận thêm quantity
  ) {
    try {
      // Kiểm tra nếu số lượng lớn hơn số lượng có sẵn
      if (quantity > product.p_quantity) {
        alert("Không đủ sản phẩm trong kho!");
        return;
      }

      await addToCart(product); // Gọi API để thêm sản phẩm vào giỏ hàng

      // Cập nhật số lượng sản phẩm sau khi thêm vào giỏ hàng
      commit("updateProductQuantity", { productId: product.id, quantity });
    } catch (error) {
      commit("setErr", error);
    }
  },
};
