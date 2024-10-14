import type { ProductState } from "@/interfaces/ProductType";
import { createStore, type StoreOptions } from "vuex";
import { productsModule } from "./modules/products";
import { cartsModule } from "./modules/carts";

export interface RootState {
  products: ProductState;
  carts: ProductState;
}
// Định nghĩa StoreOptions<RootState> để đảm bảo rằng Vuex hiểu được cấu trúc state từ các module
const storeOptions: StoreOptions<RootState> = {
  modules: {
    products: productsModule,
    carts: cartsModule,
  },
};
//store
export const store = createStore<RootState>(storeOptions);
