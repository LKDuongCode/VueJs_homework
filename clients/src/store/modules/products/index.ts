import { store } from "@/store";
import { actions } from "./actions";
import type { ProductState } from "@/interfaces/ProductType";
import { mutations, type MutationsModuleProductType } from "./mutations";

export const productsModule = {
  namespaced: true,
  state: (): ProductState => ({
    data: [],
    loading: false,
    err: null,
  }),
  mutations: mutations,
  actions: actions,
  getters: {},
};

// Hàm commit với kiểu hóa cho mutations
export function commitModuleProducts<
  K extends keyof MutationsModuleProductType
>(key: K, payload?: Parameters<MutationsModuleProductType[K]>[1]) {
  store.commit(`products/${key}`, payload);
}
