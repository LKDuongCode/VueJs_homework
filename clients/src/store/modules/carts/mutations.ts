import type { Product, ProductState } from "@/interfaces/ProductType";

import type { ApiError } from "@/interfaces/errorAPI";

export interface MutationsModule_CartType {
  setCarts: (state: ProductState, carts: Product[]) => void;
}

export const mutations = {
  setCarts(state: ProductState, carts: Product[]) {
    state.data = carts;
  },
  setLoading(state: ProductState, isLoading: boolean) {
    state.loading = isLoading;
  },
  setErr(state: ProductState, err: ApiError | null) {
    state.err = err;
  },
};
