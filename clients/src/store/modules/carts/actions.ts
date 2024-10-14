import type { ActionContext } from "vuex";
import type { RootState } from "@/store";
import type { ProductState } from "@/interfaces/ProductType";

import { getAllCart } from "@/API/carts/getAll";

export const actions = {
  async fetchCarts({ commit }: ActionContext<ProductState, RootState>) {
    //bật trạng thái tải dữ liệu trước khi gọi api
    commit("setLoading", true);
    try {
      const carts = await getAllCart();
      commit("setCarts", carts);
    } catch (error) {
      commit("setErr", error);
    } finally {
      commit("setLoading", false); //tắt trạng thái sau khi gọi api hoàn tất
    }
  },
};
