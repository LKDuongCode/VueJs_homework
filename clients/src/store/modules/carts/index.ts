import { store } from "@/store";

import type { ProductState } from "@/interfaces/ProductType";
import { mutations, type MutationsModule_CartType } from "./mutations";
import { actions } from "./actions";

export const cartsModule = {
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
export function commitModuleCarts<K extends keyof MutationsModule_CartType>(
  key: K,
  payload?: Parameters<MutationsModule_CartType[K]>[1]
) {
  store.commit(`carts/${key}`, payload);
}
