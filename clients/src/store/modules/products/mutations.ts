import type { Product, ProductState } from "@/interfaces/ProductType";

import type { ApiError } from "@/interfaces/errorAPI";

export interface MutationsModuleProductType {
  setProducts: (state: ProductState, products: Product[]) => void;
  updateProductQuantity: (
    state: ProductState,
    payload: { productId: number; quantity: number }
  ) => void;
}

export const mutations = {
  setProducts(state: ProductState, products: Product[]) {
    state.data = products;
  },
  setLoading(state: ProductState, isLoading: boolean) {
    state.loading = isLoading;
  },
  setErr(state: ProductState, err: ApiError | null) {
    state.err = err;
  },
  updateProductQuantity(
    state: ProductState,
    { productId, quantity }: { productId: number; quantity: number }
  ) {
    const product = state.data.find((p) => p.id === productId);
    if (product) {
      product.p_quantity -= quantity; // Giảm số lượng trong kho
    }
  },
};
